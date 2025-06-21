import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            // Добавляем наши кастомные цвета сюда
            colors: {
                'cyber-cyan': '#00f0ff',
                'cyber-yellow': '#fcee0a',
                'cyber-red': '#ff003c',
            },
            // Ты можешь добавить сюда и другие расширения темы, например, кастомные шрифты
            fontFamily: {
                // Если ты используешь 'Chakra Petch' или 'Mono', их можно определить здесь
                // 'sans': ['Inter', 'sans-serif'],
                // 'mono': ['Fira Code', 'monospace'],
                // 'display': ['Chakra Petch', 'sans-serif'],
            },
        },
    },

    plugins: [],
};

export default config;