import { defineConfig } from "oxlint";
import solid from "eslint-plugin-solid";

export default defineConfig({
    jsPlugins: ["eslint-plugin-solid"],
    rules: solid.configs["flat/typescript"].rules,
});
