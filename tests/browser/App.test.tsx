import { fireEvent, render, screen } from "@solidjs/testing-library";
import {
    createMemoryHistory,
    MemoryRouter,
    Navigate,
    Route,
} from "@solidjs/router";
import { expect, test } from "vitest";
import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

function renderApp(location: string) {
    const history = createMemoryHistory();
    history.set({ value: location, scroll: false });
    return render(() => (
        <MemoryRouter history={history} root={App}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/index.html" component={() => <Navigate href="/" />} />
            <Route path="*" component={NotFound} />
        </MemoryRouter>
    ));
}

test("renders the home page and navigates to About", async () => {
    expect(import.meta.env.VITEST_MODE).toBe("browser");
    renderApp("/");

    fireEvent.click(await screen.findByRole("button", { name: "Count is 0" }));
    expect(
        await screen.findByRole("button", { name: "Count is 1" })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("link", { name: "About" }));
    expect(
        await screen.findByRole("heading", { name: "About This Template" })
    ).toBeInTheDocument();
});

test("normalizes the physical entry path to Home", async () => {
    renderApp("/index.html");

    expect(
        await screen.findByRole("heading", { name: "Hello World!" })
    ).toBeInTheDocument();
});

test("renders a not-found page for an unknown route", async () => {
    renderApp("/missing");

    expect(
        await screen.findByRole("heading", { name: "Page not found" })
    ).toBeInTheDocument();
});
