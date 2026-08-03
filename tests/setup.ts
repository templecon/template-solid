import { vi } from "vitest";

if (import.meta.env.VITEST_MODE === "browser") {
    await import("@testing-library/jest-dom/vitest");
    await import("@solidjs/testing-library");
    // jsdom does not implement scrolling, while Solid Router restores scroll
    // position after navigation.
    vi.stubGlobal("scrollTo", vi.fn());
}
