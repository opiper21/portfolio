/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // 👇 Now powered by CSS variables (auto-swaps in dark mode)
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        brown: 'rgb(var(--color-brown) / <alpha-value>)',
        burnt: '#E85D04',
        teal: '#0D5C63',
        mustard: '#FFBA08',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Courier Prime"', 'monospace'],
      },
      boxShadow: {
        'retro': '6px 6px 0px 0px rgb(var(--color-brown))',
        'retro-sm': '3px 3px 0px 0px rgb(var(--color-brown))',
        'retro-orange': '6px 6px 0px 0px #E85D04',
      },
    },
  },
  plugins: [],
}