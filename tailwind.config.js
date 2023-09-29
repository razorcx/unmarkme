/** @type {import('tailwindcss').Config} */
export default {
  theme: {
  },
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.md",
  ],
};
