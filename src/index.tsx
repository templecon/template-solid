/* @refresh reload */
import "@/index.css";
import { Navigate, Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import "solid-devtools";

import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const root = document.getElementById("root");

// Strip the trailing slash Vite appends to BASE_URL so router links
// (e.g. `<A href="/about">`) don't resolve to double-slashed hrefs.
const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
    );
}

render(
    () => (
        <Router base={base} root={App}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/index.html" component={() => <Navigate href="/" />} />
            <Route path="*" component={NotFound} />
        </Router>
    ),
    root!
);
