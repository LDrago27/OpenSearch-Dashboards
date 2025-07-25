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

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { get } from 'lodash';
import { set } from '@elastic/safer-lodash-set';

import { FormHook, FieldHook, FormData, FieldConfig, FieldsMap, FormConfig } from '../types';
import { mapFormFields, unflattenObject, Subject, Subscription } from '../lib';

const DEFAULT_OPTIONS = {
  valueChangeDebounceTime: 500,
  stripEmptyFields: true,
};

interface UseFormReturn<T extends FormData, I extends FormData> {
  form: FormHook<T, I>;
}

export function useForm<T extends FormData = FormData, I extends FormData = T>(
  formConfig?: FormConfig<T, I>
): UseFormReturn<T, I> {
  const { onSubmit, schema, serializer, deserializer, options, id = 'default', defaultValue } =
    formConfig ?? {};

  const initDefaultValue = useCallback(
    (_defaultValue?: Partial<T>): { [key: string]: any } => {
      if (_defaultValue === undefined || Object.keys(_defaultValue).length === 0) {
        return {};
      }

      const filtered = Object.entries(_defaultValue as object)
        .filter(({ 1: value }) => value !== undefined)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as T);

      return deserializer ? deserializer(filtered) : filtered;
    },
    [deserializer]
  );

  const defaultValueMemoized = useMemo<{ [key: string]: any }>(() => {
    return initDefaultValue(defaultValue);
  }, [defaultValue, initDefaultValue]);

  const defaultValueDeserialized = useRef(defaultValueMemoized);

  const { valueChangeDebounceTime, stripEmptyFields: doStripEmptyFields } = options ?? {};
  const formOptions = useMemo(
    () => ({
      stripEmptyFields: doStripEmptyFields ?? DEFAULT_OPTIONS.stripEmptyFields,
      valueChangeDebounceTime: valueChangeDebounceTime ?? DEFAULT_OPTIONS.valueChangeDebounceTime,
    }),
    [valueChangeDebounceTime, doStripEmptyFields]
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const fieldsRefs = useRef<FieldsMap>({});
  const formUpdateSubscribers = useRef<Subscription[]>([]);
  const isMounted = useRef<boolean>(false);

  // formData$ is an observable we can subscribe to in order to receive live
  // update of the raw form data. As an observable it does not trigger any React
  // render().
  // The <FormDataProvider> component is the one in charge of reading this observable
  // and updating its state to trigger the necessary view render.
  const formData$ = useRef<Subject<T> | null>(null);

  // -- HELPERS
  // ----------------------------------
  const getFormData$ = useCallback((): Subject<T> => {
    if (formData$.current === null) {
      formData$.current = new Subject<T>({} as T);
    }
    return formData$.current;
  }, []);

  const fieldsToArray = useCallback<() => FieldHook[]>(() => Object.values(fieldsRefs.current), []);

  const getFieldsForOutput = useCallback(
    (fields: FieldsMap, opts: { stripEmptyFields: boolean }): FieldsMap => {
      return Object.entries(fields).reduce((acc, [key, field]) => {
        if (!field.__isIncludedInOutput) {
          return acc;
        }

        if (opts.stripEmptyFields) {
          const isFieldEmpty = typeof field.value === 'string' && field.value.trim() === '';
          if (isFieldEmpty) {
            return acc;
          }
        }

        acc[key] = field;
        return acc;
      }, {} as FieldsMap);
    },
    []
  );

  const updateFormDataAt: FormHook<T>['__updateFormDataAt'] = useCallback(
    (path, value) => {
      const _formData$ = getFormData$();
      const currentFormData = _formData$.value;

      if (currentFormData[path] !== value) {
        _formData$.next({ ...currentFormData, [path]: value });
      }

      return _formData$.value;
    },
    [getFormData$]
  );

  const updateDefaultValueAt: FormHook<T>['__updateDefaultValueAt'] = useCallback((path, value) => {
    set(defaultValueDeserialized.current, path, value);
  }, []);

  // -- API
  // ----------------------------------
  const getFormData: FormHook<T>['getFormData'] = useCallback(
    (getDataOptions: Parameters<FormHook<T>['getFormData']>[0] = { unflatten: true }) => {
      if (getDataOptions.unflatten) {
        const fieldsToOutput = getFieldsForOutput(fieldsRefs.current, {
          stripEmptyFields: formOptions.stripEmptyFields,
        });
        const fieldsValue = mapFormFields(fieldsToOutput, (field) => field.__serializeValue());
        return serializer
          ? (serializer(unflattenObject(fieldsValue) as I) as T)
          : (unflattenObject(fieldsValue) as T);
      }

      return Object.entries(fieldsRefs.current).reduce(
        (acc, [key, field]) => ({
          ...acc,
          [key]: field.value,
        }),
        {} as T
      );
    },
    [getFieldsForOutput, formOptions.stripEmptyFields, serializer]
  );

  const getErrors: FormHook['getErrors'] = useCallback(() => {
    if (isValid === true) {
      return [];
    }

    return fieldsToArray().reduce((acc, field) => {
      const fieldError = field.getErrorsMessages();
      if (fieldError === null) {
        return acc;
      }
      return [...acc, fieldError];
    }, [] as string[]);
  }, [isValid, fieldsToArray]);

  const isFieldValid = (field: FieldHook) => field.isValid && !field.isValidating;

  const waitForFieldsToFinishValidating = useCallback(async () => {
    let areSomeFieldValidating = fieldsToArray().some((field) => field.isValidating);
    if (!areSomeFieldValidating) {
      return;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        areSomeFieldValidating = fieldsToArray().some((field) => field.isValidating);
        if (areSomeFieldValidating) {
          // Recursively wait for all the fields to finish validating.
          return waitForFieldsToFinishValidating().then(resolve);
        }
        // @ts-expect-error TS2794 TODO(ts-error): fixme
        resolve();
      }, 100);
    });
  }, [fieldsToArray]);

  const validateFields: FormHook<T>['__validateFields'] = useCallback(
    async (fieldNames) => {
      const fieldsToValidate = fieldNames
        .map((name) => fieldsRefs.current[name])
        .filter((field) => field !== undefined);

      const formData = getFormData({ unflatten: false });
      const validationResult = await Promise.all(
        fieldsToValidate.map((field) => field.validate({ formData }))
      );

      if (isMounted.current === false) {
        return { areFieldsValid: true, isFormValid: true };
      }

      const areFieldsValid = validationResult.every(Boolean);

      const validationResultByPath = fieldsToValidate.reduce((acc, field, i) => {
        acc[field.path] = validationResult[i].isValid;
        return acc;
      }, {} as { [key: string]: boolean });

      // At this stage we have an updated field validation state inside the "validationResultByPath" object.
      // The fields we have in our "fieldsRefs.current" have not been updated yet with the new validation state
      // (isValid, isValidated...) as this will happen _after_, when the "useEffect" triggers and calls "addField()".
      // This means that we have **stale state value** in our fieldsRefs.
      // To know the current form validity, we will then merge the "validationResult" _with_ the fieldsRefs object state,
      // the "validationResult" taking presedence over the fieldsRefs values.
      const formFieldsValidity = fieldsToArray().map((field) => {
        const hasUpdatedValidity = validationResultByPath[field.path] !== undefined;
        const _isValid = validationResultByPath[field.path] ?? field.isValid;
        const _isValidated = hasUpdatedValidity ? true : field.isValidated;
        const _isValidating = hasUpdatedValidity ? false : field.isValidating;
        return {
          isValid: _isValid,
          isValidated: _isValidated,
          isValidating: _isValidating,
        };
      });

      const areAllFieldsValidated = formFieldsValidity.every((field) => field.isValidated);
      const areSomeFieldValidating = formFieldsValidity.some((field) => field.isValidating);

      // If *not* all the fiels have been validated, the validity of the form is unknown, thus still "undefined"
      const isFormValid =
        areAllFieldsValidated && areSomeFieldValidating === false
          ? formFieldsValidity.every((field) => field.isValid)
          : undefined;

      setIsValid(isFormValid);

      return { areFieldsValid, isFormValid };
    },
    [getFormData, fieldsToArray]
  );

  const validateAllFields = useCallback(async (): Promise<boolean> => {
    // Maybe some field are being validated because of their async validation(s).
    // We make sure those validations have finished executing before proceeding.
    await waitForFieldsToFinishValidating();

    if (!isMounted.current) {
      return false;
    }

    const fieldsArray = fieldsToArray();
    const fieldsToValidate = fieldsArray.filter((field) => !field.isValidated);

    let isFormValid: boolean | undefined;

    if (fieldsToValidate.length === 0) {
      isFormValid = fieldsArray.every(isFieldValid);
    } else {
      ({ isFormValid } = await validateFields(fieldsToValidate.map((field) => field.path)));
    }

    setIsValid(isFormValid);
    return isFormValid!;
  }, [fieldsToArray, validateFields, waitForFieldsToFinishValidating]);

  const addField: FormHook<T>['__addField'] = useCallback(
    (field) => {
      fieldsRefs.current[field.path] = field;

      updateFormDataAt(field.path, field.value);

      if (!field.isValidated) {
        setIsValid(undefined);

        // When we submit the form (and set "isSubmitted" to "true"), we validate **all fields**.
        // If a field is added and it is not validated it means that we have swapped fields and added new ones:
        // --> we have basically have a new form in front of us.
        // For that reason we make sure that the "isSubmitted" state is false.
        setIsSubmitted(false);
      }
    },
    [updateFormDataAt]
  );

  const removeField: FormHook<T>['__removeField'] = useCallback(
    (_fieldNames) => {
      const fieldNames = Array.isArray(_fieldNames) ? _fieldNames : [_fieldNames];
      const currentFormData = { ...getFormData$().value } as FormData;

      fieldNames.forEach((name) => {
        delete fieldsRefs.current[name];
        delete currentFormData[name];
      });

      getFormData$().next(currentFormData as T);

      /**
       * After removing a field, the form validity might have changed
       * (an invalid field might have been removed and now the form is valid)
       */
      setIsValid((prev) => {
        if (prev === false) {
          const isFormValid = fieldsToArray().every(isFieldValid);
          return isFormValid;
        }
        // If the form validity is "true" or "undefined", it does not change after removing a field
        return prev;
      });
    },
    [getFormData$, fieldsToArray]
  );

  const setFieldValue: FormHook<T>['setFieldValue'] = useCallback((fieldName, value) => {
    if (fieldsRefs.current[fieldName] === undefined) {
      return;
    }
    fieldsRefs.current[fieldName].setValue(value);
  }, []);

  const setFieldErrors: FormHook<T>['setFieldErrors'] = useCallback((fieldName, errors) => {
    if (fieldsRefs.current[fieldName] === undefined) {
      return;
    }
    fieldsRefs.current[fieldName].setErrors(errors);
  }, []);

  const getFields: FormHook<T>['getFields'] = useCallback(() => fieldsRefs.current, []);

  const getFieldDefaultValue: FormHook['__getFieldDefaultValue'] = useCallback(
    (fieldName) => get(defaultValueDeserialized.current, fieldName),
    []
  );

  const readFieldConfigFromSchema: FormHook<T>['__readFieldConfigFromSchema'] = useCallback(
    (fieldName) => {
      const config = (get(schema ?? {}, fieldName) as FieldConfig) || {};

      return config;
    },
    [schema]
  );

  const submitForm: FormHook<T>['submit'] = useCallback(
    async (e) => {
      if (e) {
        e.preventDefault();
      }

      setIsSubmitted(true); // User has attempted to submit the form at least once
      setSubmitting(true);

      const isFormValid = await validateAllFields();
      const formData = isFormValid ? getFormData() : ({} as T);

      if (onSubmit) {
        await onSubmit(formData, isFormValid!);
      }

      if (isMounted.current) {
        setSubmitting(false);
      }

      return { data: formData, isValid: isFormValid! };
    },
    [validateAllFields, getFormData, onSubmit]
  );

  const subscribe: FormHook<T>['subscribe'] = useCallback(
    (handler) => {
      const subscription = getFormData$().subscribe((raw) => {
        handler({ isValid, data: { raw, format: getFormData }, validate: validateAllFields });
      });

      formUpdateSubscribers.current.push(subscription);

      return {
        unsubscribe() {
          formUpdateSubscribers.current = formUpdateSubscribers.current.filter(
            (sub) => sub !== subscription
          );
          return subscription.unsubscribe();
        },
      };
    },
    [getFormData$, isValid, getFormData, validateAllFields]
  );

  /**
   * Reset all the fields of the form to their default values
   * and reset all the states to their original value.
   */
  const reset: FormHook<T>['reset'] = useCallback(
    (resetOptions = { resetValues: true }) => {
      const { resetValues = true, defaultValue: updatedDefaultValue } = resetOptions;
      const currentFormData = { ...getFormData$().value } as FormData;

      if (updatedDefaultValue) {
        defaultValueDeserialized.current = initDefaultValue(updatedDefaultValue);
      }

      Object.entries(fieldsRefs.current).forEach(([path, field]) => {
        // By resetting the form, some field might be unmounted. In order
        // to avoid a race condition, we check that the field still exists.
        const isFieldMounted = fieldsRefs.current[path] !== undefined;
        if (isFieldMounted) {
          const fieldDefaultValue = getFieldDefaultValue(path);
          field.reset({ resetValue: resetValues, defaultValue: fieldDefaultValue });
          currentFormData[path] = fieldDefaultValue;
        }
      });
      if (resetValues) {
        getFormData$().next(currentFormData as T);
      }

      setIsSubmitted(false);
      setSubmitting(false);
      setIsValid(undefined);
    },
    [getFormData$, initDefaultValue, getFieldDefaultValue]
  );

  const form = useMemo<FormHook<T>>(() => {
    return {
      isSubmitted,
      isSubmitting,
      isValid,
      id,
      submit: submitForm,
      validate: validateAllFields,
      subscribe,
      setFieldValue,
      setFieldErrors,
      getFields,
      getFormData,
      getErrors,
      reset,
      __options: formOptions,
      __getFormData$: getFormData$,
      __updateFormDataAt: updateFormDataAt,
      __updateDefaultValueAt: updateDefaultValueAt,
      __readFieldConfigFromSchema: readFieldConfigFromSchema,
      __getFieldDefaultValue: getFieldDefaultValue,
      __addField: addField,
      __removeField: removeField,
      __validateFields: validateFields,
    };
  }, [
    isSubmitted,
    isSubmitting,
    isValid,
    id,
    submitForm,
    subscribe,
    setFieldValue,
    setFieldErrors,
    getFields,
    getFormData,
    getErrors,
    getFieldDefaultValue,
    reset,
    formOptions,
    getFormData$,
    updateFormDataAt,
    updateDefaultValueAt,
    readFieldConfigFromSchema,
    addField,
    removeField,
    validateFields,
    validateAllFields,
  ]);

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    // Whenever the "defaultValue" prop changes, reinitialize our ref
    defaultValueDeserialized.current = defaultValueMemoized;
  }, [defaultValueMemoized]);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
      formUpdateSubscribers.current.forEach((subscription) => subscription.unsubscribe());
      formUpdateSubscribers.current = [];
    };
  }, []);

  return {
    form,
  };
}
