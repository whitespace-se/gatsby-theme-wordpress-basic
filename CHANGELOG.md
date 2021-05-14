## 0.3.4 (May 14, 2021)

- Fix error with `PageBreadcrumbs` on `/wp-preview` page.

## 0.3.3 (May 14, 2021)

- Wrap page element in `ThemeProvider` and `IconProvider` from
  @whitespace/components.

## 0.3.2 (May 11, 2021)

- Add support for image credit added by the `whitespace-wp-graphql-extras` WP
  plugin.
- Use HTML content for post types that doesn’t support Gutenberg editor

## 0.3.1 (May 7, 2021)

- Allow shadowing of styles for the `Breadcrumbs` component.
- Use this package’s `Link` component in `Breadcrumbs`.

## 0.3.0 (May 5, 2021)

### BREAKING CHANGES

- `usePageContext` now returns the context directly instead of a tuple like
  `[context, setContext]`
- The context for `usePageContext` is now set via Gatsby’s `wrapPageElement`
- The theme now expects these fragments to be defined:
  - `WP_ContentTypesForHook`
  - `WP_MenuItem`
  - `WP_MenusForHook`
  - `WP_PageForMenuItem`
  - `WP_PageForPageTree`
- The `url` field has been removed from the query in `usePages`. Use `uri`
  instead.

### New features

- New hooks: `useContentTypes`, `useContentType`
- `useMenus` and `useMenu` now accepts an extra argument with options. The only
  option right now is `transform`, a function to be used to transform the data
  from the GraphQL query.
- Breadcrumbs 🍞 (via
  [@whitespace/components](https://github.com/whitespace-se/components)).

### Fixes

- Fix styling for `<Image>`

## 0.2.0 (April 16, 2021)

- Adds example via submodule of
  [@whitespace/gatsby-starter-wordpress-basic](https://github.com/whitespace-se/gatsby-starter-wordpress-basic)

### Breaking changes

- A lot of files has been removed or moved

## 0.1.0 (April 15, 2021)

🎉 First version
