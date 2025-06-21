import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import type { Config } from '@sveltejs/kit';

const base_path = process.env.BASE_PATH || '';

const config: Config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html'
        }),

        paths: {
            base: base_path as '' | `/${string}`
        },
        prerender: {
            entries: ['*']
        }
    }
};

export default config;