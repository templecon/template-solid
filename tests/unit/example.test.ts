import { describe, expect, expectTypeOf, it } from "vitest";

describe("example test", () => {
    it.concurrent("should pass", () => {
        // Example test
        expect(1 + 1).toBe(2);
        // Type check example
        expectTypeOf<"asdf">().toBeString();
    });
    it.concurrent("should run in the unit project", () => {
        expect(import.meta.env.VITEST_MODE).toBe("unit");
        expect(typeof document).toBe("undefined");
        expect(typeof process).toBe("object");
        expect(process.versions.node).toBeDefined();
    });
});
