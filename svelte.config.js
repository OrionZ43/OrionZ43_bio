import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html'
        }),

        paths: {
             base: '/OrionZ43_bio'
        },
        prerender: {
            entries: ['*']
        }
    }
};

export default config;