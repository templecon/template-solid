import { createSignal, type Component } from "solid-js";

const Home: Component = () => {
    const [count, setCount] = createSignal(0);

    return (
        <main class="text-center p-6">
            <h1 class="text-3xl font-bold mb-4">Hello World!</h1>
            <p class="mb-4">Welcome to the SolidJS SPA template.</p>
            <button
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                onClick={() => setCount((c) => c + 1)}
            >
                Count is {count()}
            </button>
        </main>
    );
};

export default Home;
