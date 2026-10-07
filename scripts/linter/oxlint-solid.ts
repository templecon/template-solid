import solid from "eslint-plugin-solid";
import { defineConfig } from "oxlint";

export default defineConfig({
    jsPlugins: ["eslint-plugin-solid"],
    rules: solid.configs["flat/typescript"].rules,
});
