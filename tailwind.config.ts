/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        void: '#030303', // Глубокий черный (OLED)
        panel: '#0a0a0a', // Цвет панелей
        cyan: { DEFAULT: '#00f0ff', dim: 'rgba(0, 240, 255, 0.1)' },
        purple: { DEFAULT: '#9d00ff', dim: 'rgba(157, 0, 255, 0.1)' },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}