import { defineConfig } from "oxlint";
import solid from "eslint-plugin-solid";

export default defineConfig({
    $schema: "../../node_modules/oxlint/configuration_schema.json",
    jsPlugins: ["eslint-plugin-solid"],
    rules: solid.configs["flat/typescript"].rules,
});
