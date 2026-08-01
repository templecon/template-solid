Structure:

tests/:

- tests/browser/ : Contains integration tests that run in a DOM environment using jsdom and @solidjs/testing-library. They test SolidJS components with rendered output and user interactions.
- tests/unit/ : Contains unit tests that run in the same DOM environment. These tests focus on individual functions and modules without browser dependencies. Should be fast and isolated.

Each subdirectory should follow same structure as src/ for easy mapping between source files and tests.
