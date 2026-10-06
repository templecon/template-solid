# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.
All agents, such as Claude Code, should keep `**/AGENTS.md` in mind.

## Project Type

This is a **SolidJS SPA template** built with Vite. It builds assets for secure browser contexts (HTTPS in production or localhost for development) using clean History API URLs (`@solidjs/router`) and a SPA-bearing `404.html` entry for refresh and direct client-route loads. Remote plain HTTP and `file://` viewing are unsupported.

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

# Run unit tests in Node and browser tests in jsdom
pnpm test
```

## Architecture

- **Entry point**: `src/index.tsx` - Mounts the SolidJS app inside `@solidjs/router` with the application base from `import.meta.env.BASE_URL`.
- **Routing**: Uses `@solidjs/router` with clean History API URLs. The route tree includes an explicit catch-all that renders the `NotFound` page for unknown client routes, plus a redirect that normalizes the physical `index.html` entry path.
- **Layout**: `src/App.tsx` - Renders the shared navigation shell around the routed pages.
- **Build inputs**: Vite multi-page inputs (`index.html` and `404.html`) emit the SPA twice: `index.html` for the root and `404.html` as the GitHub Pages SPA fallback for refresh or direct visits to client routes. GitHub Pages keeps an HTTP 404 status on those fallback responses.
- **ES modules** throughout (`"type": "module"` in package.json)
- **Output format**: Generates SPA files in the `dist/` directory with absolute asset paths (`base: "/"`); the deploy workflow overrides the base with the GitHub Pages repository path.
- **Type definitions**: TypeScript throughout.
- **Testing**: Uses `@solidjs/testing-library` for SolidJS component rendering in jsdom browser tests and Node-only Vitest unit tests.

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
