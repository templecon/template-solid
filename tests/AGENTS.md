Structure:

tests/:

- tests/browser/ : Contains integration tests that run in a DOM environment using jsdom and @solidjs/testing-library. They test SolidJS components with rendered output and user interactions.
- tests/unit/ : Contains Node-only tests for pure logic. These tests are fast, isolated, and do not depend on browser APIs.

Each subdirectory should follow same structure as src/ for easy mapping between source files and tests.
