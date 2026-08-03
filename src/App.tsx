import { type Component, type JSX } from "solid-js";
import { A } from "@solidjs/router";

type AppProps = {
    children?: JSX.Element;
};

const App: Component<AppProps> = (props) => {
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
