> [!NOTE]
> This is template repository for website projects, and not a library. Check out [library template](https://github.com/templecon/template-typescript-vite).

# How to use

```
git clone <repository-url> template-solid
```

## Requirements

Node.js 26.0.0 or higher is required. This version supports the TypeScript
syntax used by `oxlint.config.ts`.

## Getting Started

This template pins pnpm in `package.json` (`packageManager`). Install that
exact version, then install dependencies:

```bash
npm install --global pnpm@10.17.1
pnpm install
```

`pnpm install` runs the `postinstall` script, which installs the git hooks
(`pre-commit` runs `pnpm run check`; `pre-push` enforces the `dev/*` branch
naming convention).

## Conventions and Rules

This project follows specific conventions and rules for code style, data validation, testing, and more. Please refer to the following documentation for detailed guidelines.

- [Typescript](./docs/rules/typescript.md)
- [Typescript Schema Validation](./docs/rules/typescript_schema.md)
- [Testing Guidelines](./docs/rules/tests.md)

---

## Static Hosting

Deploy the `dist/` output over HTTP(S), such as GitHub Pages or `pnpm preview`.
A plain `pnpm build` emits relative asset URLs, so the output serves correctly
from a domain root or a GitHub Pages project site subpath
(`https://<user>.github.io/<repo>/`). For History API routing below the domain
root, rebuild with the site's absolute base path, e.g.
`pnpm build --base "/<repo>/"`; the included deploy workflow supplies this base
automatically.

GitHub Pages fallback responses retain an HTTP 404 status even when SolidJS
renders a valid client route. This can affect SEO, crawlers, and link previews.
Unknown client routes render the application's `Page not found` view.

`file://` viewing is unsupported.

## Tests

Vitest has separate Node (`tests/unit/`) and jsdom (`tests/browser/`) projects.
Browser fixtures use `@solidjs/testing-library` and exercise rendered user
behavior, including route navigation.
