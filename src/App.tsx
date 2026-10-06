import { A } from "@solidjs/router";
import { type Component, type JSX } from "solid-js";

type AppProps = {
    children?: JSX.Element;
};

const App: Component<AppProps> = (props) => {
    return (
        <div class="min-h-screen">
            <nav class="flex items-center gap-4 border-b bg-gray-100 px-6 py-3">
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
