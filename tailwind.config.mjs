/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#121820',
        'sky-blue': '#a6ddf9',
        'pastel-green': '#23d47f',
      },
    },
  },
  variants: {
    lineClamp: ['hover'],
  },
  plugins: [],
};
