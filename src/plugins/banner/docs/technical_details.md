# Banner Plugin Technical Details

This document provides technical details about the Banner plugin implementation.

## Architecture

The Banner plugin consists of the following components:

1. **Server-side configuration**: Enables/disables the plugin via the `banner.enabled` setting in `opensearch_dashboards.yml`
2. **Global banner container**: A div with id `pluginGlobalBanner` that is conditionally rendered in the header based on the feature flag
3. **Banner component**: A React component that renders the banner content with support for Markdown
4. **LinkRenderer component**: A separate component for rendering links in the Markdown content to open in new tabs

## CSS Implementation

The banner uses a CSS variable (`--global-banner-height`) to dynamically adjust the layout based on the banner's height. This ensures that the OpenSearch Dashboards header and content are properly positioned below the banner.

```css
/* Example of how the CSS variable is used */
.headerGlobalNav {
  top: var(--global-banner-height, 0);
}
```

## Height Calculation

The banner's height is calculated using a ResizeObserver to account for different content lengths and screen sizes:

1. The banner height is determined by the EuiCallOut component's size property
2. A ResizeObserver monitors the actual rendered height of the banner
3. The CSS variable is updated with the actual height
4. When the banner is hidden, the height is set to 0px

## Banner Size

The banner size can be configured using the `size` property:

1. The `size` property accepts values of `s` (small) or `m` (medium)
2. The default size is `m` (medium)
3. The size affects the padding and overall appearance of the banner
4. Smaller size results in a more compact banner with less vertical space


## Feature Flag

The banner is conditionally rendered based on the `banner.enabled` configuration:

1. The server-side configuration is exposed to the browser
2. The header component checks this configuration before rendering the banner container
3. If disabled, the banner container is not rendered at all, ensuring no performance impact
