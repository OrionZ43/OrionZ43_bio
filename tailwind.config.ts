import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            colors: {
                'cyber-cyan': '#00f0ff',
                'cyber-yellow': '#fcee0a',
                'cyber-red': '#ff003c',
            },
            fontFamily: {
            },
        },
    },

    plugins: [],
};

export default config;