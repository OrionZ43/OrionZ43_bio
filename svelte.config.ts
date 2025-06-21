import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import type { Config } from '@sveltejs/kit';

const config: Config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),

        paths: {
            base: '/OrionZ43_bio'
        }
    }
};

export default config;