> [!NOTE]
> This is template repository for website projects, and not a library. Check out [library template](https://github.com/templecon/template-typescript-vite).

# How to use

```
git clone <repository-url> template-solid
```

## Requirements

Node.js version 22.18.0 or higher is recommended, since it has basic TypeScript support, which is used on oxlint.config.ts.
Older versions will:

- Older than v22.6.0: Not work, migrate Node version or oxlint.config.ts to .js.
- Between v22.6.0 and v22.18.0: Work, but require `--experimental-transform-types`(since v22.7.0) or `--experimental-strip-types`(since v22.6.0) flag on `NODE_OPTIONS` environment variable.
- v22.18.0 or higher: Work without flags.

## Conventions and Rules

This project follows specific conventions and rules for code style, data validation, testing, and more. Please refer to the following documentation for detailed guidelines.

- [Typescript](./docs/rules/typescript.md)
- [Typescript Schema Validation](./docs/rules/typescript_schema.md)
- [Testing Guidelines](./docs/rules/tests.md)

---

## Static Hosting

Deploy the `dist/` output over HTTP(S), such as GitHub Pages or `pnpm preview`.
This template uses clean History API URLs via `@solidjs/router`. GitHub Pages
serves the SPA-bearing `404.html` for a refresh or direct visit to a client
route, so SolidJS can render the matching page without changing the URL.

GitHub Pages fallback responses retain an HTTP 404 status even when SolidJS
renders a valid client route. This can affect SEO, crawlers, and link previews.
Unknown client routes render the application's `Page not found` view.

`file://` viewing is unsupported.

## Tests

Vitest runs in a jsdom environment for both `tests/unit/` and `tests/browser/`.
Browser fixtures use `@solidjs/testing-library` and exercise rendered user
behavior, including route navigation.
