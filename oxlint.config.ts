import { defineConfig } from "oxlint";
import frontendConfig from "@concertypin/config/oxlint/frontend";
import scriptsConfig from "@concertypin/config/oxlint/scripts";
import solidConfig from "./scripts/linter/oxlint-solid.ts";

export default defineConfig({
    $schema: "./node_modules/oxlint/configuration_schema.json",
    plugins: ["typescript", "unicorn", "import", "vitest", "promise"],
    env: {
        builtin: true,
    },
    ignorePatterns: [
        "**/node_modules/**",
        "**/dist/**",
        "**/dist-ts/**",
        "**/coverage/**",
        "**/.cache/**",
        "**/.vscode/**",
        "**/.git/**",
    ],
    options: {
        denyWarnings: true,
        reportUnusedDisableDirectives: "error",
        typeAware: true,
        typeCheck: true,
    },
    extends: [frontendConfig, solidConfig, scriptsConfig],
});
