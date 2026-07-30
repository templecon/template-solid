# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.
All agents, such as Claude Code, should keep `**/AGENTS.md` in mind.

## Project Type

This is a **SolidJS SPA template** built with Vite. It uses a custom Vite plugin to copy `index.html` to route directories at build time, enabling static hosting on GitHub Pages and local `file://` viewing without a HashRouter or Node-based SSR.

## Development Commands

```bash
# Start development server with HMR
pnpm dev

# Build for production (outputs SPA to dist/)
pnpm build

# Format code
pnpm format

# Lint code
pnpm lint

# Run tests (Vitest with browser and node environments)
pnpm test
```

## Architecture

- **Entry point**: `src/index.tsx` - Mounts the SolidJS app. On `file://` protocol it renders without `@solidjs/router`; on HTTP it uses the router for full SPA navigation.
- **Routing**: Uses `@solidjs/router` for HTTP (clean History API URLs) and a simple `__SPA_ROUTE__`-based approach for `file://` (full page navigations to copied `index.html` files).
- **Build plugin**: A custom Vite plugin (`spaCopyPlugin` in `vite.config.ts`) copies `dist/index.html` to `dist/404.html` (GitHub Pages fallback) and route-specific directories (e.g. `dist/about/index.html`), injecting `window.__SPA_ROUTE__` for `file://` support.
- **ES modules** throughout (`"type": "module"` in package.json)
- **Output format**: Generates SPA files in the `dist/` directory with relative asset paths (`base: "./"`).
- **Type definitions**: TypeScript throughout.
- **Testing**: Uses `vitest-browser-solid` for SolidJS component rendering in Vitest Browser Mode (browser tests), and standard Vitest for Node.js unit tests.

## Coding Standards

If you can't access the project's convention, such as hono, typescript, typescript-schema, ask user for adding MCP server.
MCP Server:

- Endpoint: https://conventions.aieuroka.workers.dev/mcp (for most clients), https://conventions.aieuroka.workers.dev/with-tool/mcp (for GitHub Copilot, which doesn't support resource retrieval)
- Streamable HTTP, without authentication

## TypeScript Configuration

- **Path alias**: `@/*` maps to `src/*` (configured in `tsconfig.base.json`)
- **Project references**: Uses `tsconfig.json` with `app` and `node` references
- **Strict mode** enabled

## Package Manager

This project uses **pnpm**.

## Using This Template

Immediately after creating a project from this template, upgrade all dependencies and refresh the lockfile:

```bash
pnpm up --latest
```

Run the project's format, lint, test, and build checks after the upgrade and resolve every resulting error before continuing development.
