import { type Component } from "solid-js";

const About: Component = () => {
    return (
        <main class="text-center p-6">
            <h1 class="text-3xl font-bold mb-4">About This Template</h1>
            <p class="mb-2">
                This is a <strong>SolidJS SPA template</strong> built with Vite.
            </p>
            <p class="mb-2">
                It supports static hosting on GitHub Pages and local{" "}
                <code>file://</code> viewing via a custom Vite plugin that
                copies <code>index.html</code> to route directories.
            </p>
            <p>
                Testing is done with <code>vitest-browser-solid</code> in Vitest
                Browser Mode.
            </p>
        </main>
    );
};

export default About;
