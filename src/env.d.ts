/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITEST_MODE?: "unit" | "browser";
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
interface ViteTypeOptions {
    strictImportMetaEnv: unknown;
}
