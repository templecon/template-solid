/* @refresh reload */
import "@/index.css";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "solid-devtools";

import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
    );
}

if (window.location.protocol === "file:") {
    // file:// protocol: render without Solid Router, routing handled inside App
    render(() => <App />, root!);
} else {
    // HTTP: full SPA with Solid Router, including catch-all redirect for unknown paths
    render(
        () => (
            <Router root={App}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="*" component={Home} />
            </Router>
        ),
        root!
    );
}
