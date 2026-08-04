/// <reference types="vitest/config" />

import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { type UserConfig, defineConfig } from "vite";
import devtools from "solid-devtools/vite";
import solid from "vite-plugin-solid";

type Config = Required<UserConfig>;
const resolveAlias: Config["resolve"] = {
    alias: {
        "@": fileURLToPath(new URL("src", import.meta.url)),
    },
};

const testConfig: Config["test"] = {
    coverage: {
        enabled: true,
        include: ["src/**/*.{ts,tsx}"],
        provider: "v8",
        reportOnFailure: true,
        reporter: ["text", "json-summary", "html"],
    },
    projects: [
        {
            test: {
                name: "unit",
                environment: "node",
                include: ["tests/unit/**/*.test.ts"],
                env: {
                    VITEST_MODE: "unit",
                },
            },
            extends: true,
        },
        {
            test: {
                name: "browser",
                environment: "jsdom",
                include: ["tests/browser/**/*.test.{ts,tsx}"],
                env: {
                    VITEST_MODE: "browser",
                },
            },
            extends: true,
        },
    ],
    exclude: ["**/node_modules/**", "**/dist/**"],
    globals: true,
    setupFiles: "./tests/setup.ts",
};

const isTest = process.env.VITEST === "true";
export default defineConfig({
    base: "./",
    build: {
        outDir: "dist",
        rolldownOptions: {
            input: {
                main: resolve(import.meta.dirname, "index.html"),
                notFound: resolve(import.meta.dirname, "404.html"),
            },
        },
        sourcemap: true,
    },
    clearScreen: false,
    optimizeDeps: {
        exclude: ["solid-js"],
    },
    plugins: [devtools(), solid({ hot: !isTest })],
    resolve: resolveAlias,
    server: {
        open: "/",
    },
    test: testConfig,
});
