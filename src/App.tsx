import { type JSX, type Component } from "solid-js";
import { A } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/About";

interface AppProps {
    children?: JSX.Element;
}

const App: Component<AppProps> = (props) => {
    const isFile = window.location.protocol === "file:";

    // File:// protocol: use __SPA_ROUTE__ injected by the build plugin, full page navigations
    if (isFile) {
        const route: string = window.__SPA_ROUTE__ || "/";

        const navigate = (to: string) => {
            window.location.href =
                to === "/" ? "./index.html" : `.${to}/index.html`;
        };

        return (
            <div class="min-h-screen">
                <nav class="flex gap-4 items-center border-b px-6 py-3 bg-gray-100">
                    <a
                        href="./index.html"
                        class="text-blue-600 hover:underline"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                        }}
                    >
                        Home
                    </a>
                    <a
                        href="./about/index.html"
                        class="text-blue-600 hover:underline"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/about");
                        }}
                    >
                        About
                    </a>
                </nav>
                {route === "/about" ? <About /> : <Home />}
            </div>
        );
    }

    // HTTP: use Solid Router for SPA navigation
    return (
        <div class="min-h-screen">
            <nav class="flex gap-4 items-center border-b px-6 py-3 bg-gray-100">
                <A href="/" class="text-blue-600 hover:underline">
                    Home
                </A>
                <A href="/about" class="text-blue-600 hover:underline">
                    About
                </A>
            </nav>
            {props.children}
        </div>
    );
};

export default App;
