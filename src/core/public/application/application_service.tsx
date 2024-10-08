/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map, shareReplay, takeUntil, distinctUntilChanged, filter } from 'rxjs/operators';
import { createBrowserHistory, History } from 'history';
import { RecursiveReadonly } from '@osd/utility-types';

import { MountPoint } from '../types';
import { HttpSetup, HttpStart } from '../http';
import { OverlayStart } from '../overlays';
import { HeaderControlsContainer } from '../chrome/constants';
import { ContextSetup, IContextContainer } from '../context';
import { PluginOpaqueId } from '../plugins';
import { AppRouter } from './ui';
import { Capabilities, CapabilitiesService } from './capabilities';
import {
  App,
  AppLeaveHandler,
  AppMount,
  AppMountDeprecated,
  AppNavLinkStatus,
  AppStatus,
  AppUpdatableFields,
  AppUpdater,
  InternalApplicationSetup,
  InternalApplicationStart,
  Mounter,
  NavigateToAppOptions,
  WorkspaceAvailability,
} from './types';
import { getLeaveAction, isConfirmAction } from './application_leave';
import { appendAppPath, parseAppUrl, relativeToAbsolute, getAppInfo } from './utils';
import { WorkspacesStart } from '../workspace';

interface SetupDeps {
  context: ContextSetup;
  http: HttpSetup;
  history?: History<any>;
  /** Used to redirect to external urls */
  redirectTo?: (path: string) => void;
}

interface StartDeps {
  http: HttpStart;
  overlays: OverlayStart;
  workspaces: WorkspacesStart;
}

// Mount functions with two arguments are assumed to expect deprecated `context` object.
const isAppMountDeprecated = (mount: (...args: any[]) => any): mount is AppMountDeprecated =>
  mount.length === 2;
function filterAvailable<T>(m: Map<string, T>, capabilities: RecursiveReadonly<Capabilities>) {
  return new Map(
    [...m].filter(
      ([id]) => capabilities.navLinks[id] === undefined || capabilities.navLinks[id] === true
    )
  );
}
const findMounter = (mounters: Map<string, Mounter>, appRoute?: string) =>
  [...mounters].find(([, mounter]) => mounter.appRoute === appRoute);

const getAppUrl = (mounters: Map<string, Mounter>, appId: string, path: string = '') => {
  const appBasePath = mounters.get(appId)?.appRoute
    ? `/${mounters.get(appId)!.appRoute}`
    : `/app/${appId}`;
  return appendAppPath(appBasePath, path);
};

const allApplicationsFilter = '__ALL__';

interface AppUpdaterWrapper {
  application: string;
  updater: AppUpdater;
}

interface AppInternalState {
  leaveHandler?: AppLeaveHandler;
  actionMenu?: MountPoint;
  leftControls?: MountPoint;
  centerControls?: MountPoint;
  rightControls?: MountPoint;
  badgeControls?: MountPoint;
  descriptionControls?: MountPoint;
  bottomControls?: MountPoint;
}

/**
 * Service that is responsible for registering new applications.
 * @internal
 */
export class ApplicationService {
  private readonly apps = new Map<string, App<any>>();
  private readonly mounters = new Map<string, Mounter>();
  private readonly capabilities = new CapabilitiesService();
  private readonly appInternalStates = new Map<string, AppInternalState>();
  private currentAppId$ = new BehaviorSubject<string | undefined>(undefined);
  private currentActionMenu$ = new BehaviorSubject<MountPoint | undefined>(undefined);

  // HeaderControls
  private currentLeftControls$ = new BehaviorSubject<MountPoint | undefined>(undefined);
  private currentCenterControls$ = new BehaviorSubject<MountPoint | undefined>(undefined);
  private currentRightControls$ = new BehaviorSubject<MountPoint | undefined>(undefined);
  private currentBadgeControls$ = new BehaviorSubject<MountPoint | undefined>(undefined);
  private currentDescriptionControls$ = new BehaviorSubject<MountPoint | undefined>(undefined);
  private currentBottomControls$ = new BehaviorSubject<MountPoint | undefined>(undefined);

  private readonly statusUpdaters$ = new BehaviorSubject<Map<symbol, AppUpdaterWrapper>>(new Map());
  private readonly subscriptions: Subscription[] = [];
  private stop$ = new Subject();
  private registrationClosed = false;
  private history?: History<any>;
  private mountContext?: IContextContainer<AppMountDeprecated>;
  private navigate?: (url: string, state: unknown, replace: boolean) => void;
  private redirectTo?: (url: string) => void;

  public setup({
    context,
    http: { basePath },
    redirectTo = (path: string) => {
      window.location.assign(path);
    },
    history,
  }: SetupDeps): InternalApplicationSetup {
    const basename = basePath.get();
    this.history = history || createBrowserHistory({ basename });

    this.navigate = (url, state, replace) => {
      // basePath not needed here because `history` is configured with basename
      return replace ? this.history!.replace(url, state) : this.history!.push(url, state);
    };

    this.redirectTo = redirectTo;
    this.mountContext = context.createContextContainer();

    const registerStatusUpdater = (application: string, updater$: Observable<AppUpdater>) => {
      const updaterId = Symbol();
      const subscription = updater$.subscribe((updater) => {
        const nextValue = new Map(this.statusUpdaters$.getValue());
        nextValue.set(updaterId, {
          application,
          updater,
        });
        this.statusUpdaters$.next(nextValue);
      });
      this.subscriptions.push(subscription);
    };

    const wrapMount = (plugin: PluginOpaqueId, app: App<any>): AppMount => {
      let handler: AppMount;
      if (isAppMountDeprecated(app.mount)) {
        handler = this.mountContext!.createHandler(plugin, app.mount);
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn(
            `App [${app.id}] is using deprecated mount context. Use core.getStartServices() instead.`
          );
        }
      } else {
        handler = app.mount;
      }
      return async (params) => {
        this.currentAppId$.next(app.id);
        return handler(params);
      };
    };

    return {
      registerMountContext: this.mountContext!.registerContext,
      register: (plugin, app: App<any>) => {
        app = { appRoute: `/app/${app.id}`, ...app };

        if (this.registrationClosed) {
          throw new Error(`Applications cannot be registered after "setup"`);
        } else if (this.apps.has(app.id)) {
          throw new Error(`An application is already registered with the id "${app.id}"`);
        } else if (findMounter(this.mounters, app.appRoute)) {
          throw new Error(
            `An application is already registered with the appRoute "${app.appRoute}"`
          );
        } else if (basename && app.appRoute!.startsWith(`${basename}/`)) {
          throw new Error('Cannot register an application route that includes HTTP base path');
        }

        const { updater$, ...appProps } = app;
        this.apps.set(app.id, {
          ...appProps,
          status: app.status ?? AppStatus.accessible,
          navLinkStatus: app.navLinkStatus ?? AppNavLinkStatus.default,
        });
        if (updater$) {
          registerStatusUpdater(app.id, updater$);
        }
        this.mounters.set(app.id, {
          appRoute: app.appRoute!,
          appBasePath: basePath.prepend(app.appRoute!),
          exactRoute: app.exactRoute ?? false,
          mount: wrapMount(plugin, app),
          unmountBeforeMounting: false,
        });
      },
      registerAppUpdater: (appUpdater$: Observable<AppUpdater>) =>
        registerStatusUpdater(allApplicationsFilter, appUpdater$),
    };
  }

  public async start({ http, overlays, workspaces }: StartDeps): Promise<InternalApplicationStart> {
    if (!this.mountContext) {
      throw new Error('ApplicationService#setup() must be invoked before start.');
    }

    const httpLoadingCount$ = new BehaviorSubject(0);
    http.addLoadingCountSource(httpLoadingCount$);

    this.registrationClosed = true;
    window.addEventListener('beforeunload', this.onBeforeUnload);

    const { capabilities } = await this.capabilities.start({
      appIds: [...this.mounters.keys()],
      http,
    });
    const availableMounters = filterAvailable(this.mounters, capabilities);
    const availableApps = filterAvailable(this.apps, capabilities);

    const applications$ = new BehaviorSubject(availableApps);
    this.statusUpdaters$
      .pipe(
        map((statusUpdaters) => {
          return new Map(
            [...availableApps].map(([id, app]) => [
              id,
              updateStatus(app, [...statusUpdaters.values()]),
            ])
          );
        })
      )
      .subscribe((apps) => applications$.next(apps));

    const applicationStatuses$ = applications$.pipe(
      map((apps) => new Map([...apps.entries()].map(([id, app]) => [id, app.status!]))),
      shareReplay(1)
    );

    const navigateToApp: InternalApplicationStart['navigateToApp'] = async (
      appId,
      { path, state, replace = false }: NavigateToAppOptions = {}
    ) => {
      const currentAppId = this.currentAppId$.value;
      const navigatingToSameApp = currentAppId === appId;
      const shouldNavigate = navigatingToSameApp ? true : await this.shouldNavigate(overlays);

      if (shouldNavigate) {
        const targetApp = applications$.value.get(appId);
        if (
          workspaces.currentWorkspaceId$.value &&
          targetApp?.workspaceAvailability === WorkspaceAvailability.outsideWorkspace
        ) {
          // If user is inside a workspace and the target app is not available within a workspace
          // refresh the page by doing a hard navigation
          window.location.assign(
            http.basePath.prepend(getAppUrl(availableMounters, appId, path), {
              // Set withoutClientBasePath to true remove the workspace path prefix
              withoutClientBasePath: true,
            })
          );
          return;
        }

        if (path === undefined) {
          path = applications$.value.get(appId)?.defaultPath;
        }
        if (!navigatingToSameApp) {
          this.appInternalStates.delete(this.currentAppId$.value!);
        }
        this.navigate!(getAppUrl(availableMounters, appId, path), state, replace);
        this.currentAppId$.next(appId);
      }
    };

    this.currentAppId$.subscribe(() => this.refreshCurrentActionMenu());

    this.currentAppId$.subscribe(() => this.refreshCurrentControls(HeaderControlsContainer.LEFT));
    this.currentAppId$.subscribe(() => this.refreshCurrentControls(HeaderControlsContainer.CENTER));
    this.currentAppId$.subscribe(() => this.refreshCurrentControls(HeaderControlsContainer.RIGHT));
    this.currentAppId$.subscribe(() => this.refreshCurrentControls(HeaderControlsContainer.BADGE));
    this.currentAppId$.subscribe(() =>
      this.refreshCurrentControls(HeaderControlsContainer.DESCRIPTION)
    );
    this.currentAppId$.subscribe(() => this.refreshCurrentControls(HeaderControlsContainer.BOTTOM));

    return {
      applications$: applications$.pipe(
        map((apps) => new Map([...apps.entries()].map(([id, app]) => [id, getAppInfo(app)]))),
        shareReplay(1)
      ),
      capabilities,
      currentAppId$: this.currentAppId$.pipe(
        filter((appId) => appId !== undefined),
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),
      currentActionMenu$: this.currentActionMenu$.pipe(
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),

      // HeaderControls
      currentLeftControls$: this.currentLeftControls$.pipe(
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),
      currentCenterControls$: this.currentCenterControls$.pipe(
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),
      currentRightControls$: this.currentRightControls$.pipe(
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),
      currentBadgeControls$: this.currentBadgeControls$.pipe(
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),
      currentDescriptionControls$: this.currentDescriptionControls$.pipe(
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),
      currentBottomControls$: this.currentBottomControls$.pipe(
        distinctUntilChanged(),
        takeUntil(this.stop$)
      ),

      setAppLeftControls: (mount: MountPoint | undefined) =>
        this.setAppLeftControls(this.currentAppId$.value, mount),
      setAppCenterControls: (mount: MountPoint | undefined) =>
        this.setAppCenterControls(this.currentAppId$.value, mount),
      setAppRightControls: (mount: MountPoint | undefined) =>
        this.setAppRightControls(this.currentAppId$.value, mount),
      setAppBadgeControls: (mount: MountPoint | undefined) =>
        this.setAppBadgeControls(this.currentAppId$.value, mount),
      setAppDescriptionControls: (mount: MountPoint | undefined) =>
        this.setAppDescriptionControls(this.currentAppId$.value, mount),
      setAppBottomControls: (mount: MountPoint | undefined) =>
        this.setAppBottomControls(this.currentAppId$.value, mount),

      history: this.history!,
      registerMountContext: this.mountContext.registerContext,
      getUrlForApp: (
        appId,
        { path, absolute = false }: { path?: string; absolute?: boolean } = {}
      ) => {
        const targetApp = applications$.value.get(appId);
        const relUrl = http.basePath.prepend(getAppUrl(availableMounters, appId, path), {
          withoutClientBasePath:
            targetApp?.workspaceAvailability === WorkspaceAvailability.outsideWorkspace,
        });
        return absolute ? relativeToAbsolute(relUrl) : relUrl;
      },
      navigateToApp,
      navigateToUrl: async (url) => {
        const appInfo = parseAppUrl(url, http.basePath, this.apps);
        if (appInfo) {
          return navigateToApp(appInfo.app, { path: appInfo.path });
        } else {
          return this.redirectTo!(url);
        }
      },
      getComponent: () => {
        if (!this.history) {
          return null;
        }
        return (
          <AppRouter
            history={this.history}
            mounters={availableMounters}
            appStatuses$={applicationStatuses$}
            setAppLeaveHandler={this.setAppLeaveHandler}
            setAppActionMenu={this.setAppActionMenu}
            setAppLeftControls={this.setAppLeftControls}
            setAppCenterControls={this.setAppCenterControls}
            setAppRightControls={this.setAppRightControls}
            setAppBadgeControls={this.setAppBadgeControls}
            setAppDescriptionControls={this.setAppDescriptionControls}
            setAppBottomControls={this.setAppBottomControls}
            setIsMounting={(isMounting) => httpLoadingCount$.next(isMounting ? 1 : 0)}
          />
        );
      },
    };
  }

  private setAppLeaveHandler = (appId: string, handler: AppLeaveHandler) => {
    this.appInternalStates.set(appId, {
      ...(this.appInternalStates.get(appId) ?? {}),
      leaveHandler: handler,
    });
  };

  private setAppActionMenu = (appId: string, mount: MountPoint | undefined) => {
    this.appInternalStates.set(appId, {
      ...(this.appInternalStates.get(appId) ?? {}),
      actionMenu: mount,
    });
    this.refreshCurrentActionMenu();
  };

  private refreshCurrentActionMenu = () => {
    const appId = this.currentAppId$.getValue();
    const currentActionMenu = appId ? this.appInternalStates.get(appId)?.actionMenu : undefined;
    this.currentActionMenu$.next(currentActionMenu);
  };

  private setAppLeftControls = (appPath: string | undefined, mount: MountPoint | undefined) =>
    this.setAppControls(appPath, mount, HeaderControlsContainer.LEFT);

  private setAppCenterControls = (appPath: string | undefined, mount: MountPoint | undefined) =>
    this.setAppControls(appPath, mount, HeaderControlsContainer.CENTER);

  private setAppRightControls = (appPath: string | undefined, mount: MountPoint | undefined) =>
    this.setAppControls(appPath, mount, HeaderControlsContainer.RIGHT);

  private setAppBadgeControls = (appPath: string | undefined, mount: MountPoint | undefined) =>
    this.setAppControls(appPath, mount, HeaderControlsContainer.BADGE);

  private setAppDescriptionControls = (
    appPath: string | undefined,
    mount: MountPoint | undefined
  ) => this.setAppControls(appPath, mount, HeaderControlsContainer.DESCRIPTION);

  private setAppBottomControls = (appPath: string | undefined, mount: MountPoint | undefined) =>
    this.setAppControls(appPath, mount, HeaderControlsContainer.BOTTOM);

  private setAppControls = (
    appPath: string | undefined,
    mount: MountPoint | undefined,
    container: HeaderControlsContainer
  ) => {
    if (!appPath) return;

    this.appInternalStates.set(appPath, {
      ...(this.appInternalStates.get(appPath) ?? {}),
      [`${container}Controls`]: mount,
    });

    this.refreshCurrentControls(container);
  };

  private refreshCurrentControls = (container: HeaderControlsContainer) => {
    const appId = this.currentAppId$.getValue();
    switch (container) {
      case HeaderControlsContainer.LEFT:
        return this.currentLeftControls$.next(
          appId ? this.appInternalStates.get(appId)?.leftControls : undefined
        );
      case HeaderControlsContainer.CENTER:
        return this.currentCenterControls$.next(
          appId ? this.appInternalStates.get(appId)?.centerControls : undefined
        );
      case HeaderControlsContainer.RIGHT:
        return this.currentRightControls$.next(
          appId ? this.appInternalStates.get(appId)?.rightControls : undefined
        );
      case HeaderControlsContainer.BADGE:
        return this.currentBadgeControls$.next(
          appId ? this.appInternalStates.get(appId)?.badgeControls : undefined
        );
      case HeaderControlsContainer.DESCRIPTION:
        return this.currentDescriptionControls$.next(
          appId ? this.appInternalStates.get(appId)?.descriptionControls : undefined
        );
      case HeaderControlsContainer.BOTTOM:
        return this.currentBottomControls$.next(
          appId ? this.appInternalStates.get(appId)?.bottomControls : undefined
        );
    }
  };

  private async shouldNavigate(overlays: OverlayStart): Promise<boolean> {
    const currentAppId = this.currentAppId$.value;
    if (currentAppId === undefined) {
      return true;
    }
    const action = getLeaveAction(this.appInternalStates.get(currentAppId)?.leaveHandler);
    if (isConfirmAction(action)) {
      const confirmed = await overlays.openConfirm(action.text, {
        title: action.title,
        'data-test-subj': 'appLeaveConfirmModal',
      });
      if (!confirmed) {
        return false;
      }
      if (action?.callback) {
        action.callback();
      }
    }
    return true;
  }

  private onBeforeUnload = (event: Event) => {
    const currentAppId = this.currentAppId$.value;
    if (currentAppId === undefined) {
      return;
    }
    const action = getLeaveAction(this.appInternalStates.get(currentAppId)?.leaveHandler);
    if (isConfirmAction(action)) {
      event.preventDefault();
      // some browsers accept a string return value being the message displayed
      event.returnValue = action.text as any;
    }
  };

  public stop() {
    this.stop$.next();
    this.currentAppId$.complete();
    this.currentActionMenu$.complete();
    this.currentLeftControls$.complete();
    this.currentCenterControls$.complete();
    this.currentRightControls$.complete();
    this.currentBadgeControls$.complete();
    this.currentDescriptionControls$.complete();
    this.currentBottomControls$.complete();
    this.statusUpdaters$.complete();
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    window.removeEventListener('beforeunload', this.onBeforeUnload);
  }
}

const updateStatus = (app: App, statusUpdaters: AppUpdaterWrapper[]): App => {
  let changes: Partial<AppUpdatableFields> = {};
  statusUpdaters.forEach((wrapper) => {
    if (wrapper.application !== allApplicationsFilter && wrapper.application !== app.id) {
      return;
    }
    const fields = wrapper.updater(app);
    if (fields) {
      changes = {
        ...changes,
        ...fields,
        // status and navLinkStatus enums are ordered by reversed priority
        // if multiple updaters wants to change these fields, we will always follow the priority order.
        status: Math.max(changes.status ?? 0, fields.status ?? 0),
        navLinkStatus: Math.max(changes.navLinkStatus ?? 0, fields.navLinkStatus ?? 0),
      };
    }
  });
  return {
    ...app,
    ...changes,
  };
};
