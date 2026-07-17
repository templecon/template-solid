import { type JSX, type Component, Show } from "solid-js";
import { A } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/About";

interface AppProps {
    children?: JSX.Element;
}

const App: Component<AppProps> = (props) => {
    const isFile = window.location.protocol === "file:";
    const route: string = isFile ? window.__SPA_ROUTE__ || "/" : "/";

    const navigate = (to: string) => {
        window.location.href =
            to === "/" ? "./index.html" : `.${to}/index.html`;
    };

    return (
        <div class="min-h-screen">
            <nav class="flex gap-4 items-center border-b px-6 py-3 bg-gray-100">
                <Show
                    when={isFile}
                    fallback={
                        <>
                            <A href="/" class="text-blue-600 hover:underline">
                                Home
                            </A>
                            <A
                                href="/about"
                                class="text-blue-600 hover:underline"
                            >
                                About
                            </A>
                        </>
                    }
                >
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
                </Show>
            </nav>
            <Show
                when={!isFile}
                fallback={route === "/about" ? <About /> : <Home />}
            >
                {props.children}
            </Show>
        </div>
    );
};

export default App;
