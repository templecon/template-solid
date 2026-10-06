import { type Component } from "solid-js";

const About: Component = () => {
    return (
        <main class="p-6 text-center">
            <h1 class="mb-4 text-3xl font-bold">About This Template</h1>
            <p class="mb-2">
                This is a <strong>SolidJS SPA template</strong> built with Vite.
            </p>
            <p class="mb-2">
                SolidJS Router handles application navigation. GitHub Pages
                serves this app's custom 404 page for direct route loads, then
                SolidJS renders the matching client route.
            </p>
            <p class="mb-2">
                Tests use <code>@solidjs/testing-library</code> in Vitest with
                jsdom to exercise rendered user behavior.
            </p>
        </main>
    );
};

export default About;
