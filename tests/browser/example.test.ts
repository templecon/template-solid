import { describe, expect, it } from "vitest";

describe("example browser test", () => {
    it.concurrent("should run in DOM environment", () => {
        // Localstorage is only available in DOM environment,
        // Not in node.
        // If this test runs successfully, the DOM environment works.
        expect(localStorage).not.toBeNull();
    });
});
