import { createSignal, type Component } from "solid-js";

const Home: Component = () => {
    const [count, setCount] = createSignal(0);

    return (
        <main class="p-6 text-center">
            <h1 class="mb-4 text-3xl font-bold">Hello World!</h1>
            <p class="mb-4">Welcome to the SolidJS SPA template.</p>
            <button
                class="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                onClick={() => setCount((c) => c + 1)}
            >
                Count is {count()}
            </button>
        </main>
    );
};

export default Home;
