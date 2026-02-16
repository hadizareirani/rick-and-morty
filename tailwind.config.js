/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2C2E30",
        dark: "#0E0E0E",
        darkCyan: "#00333D",
        glow: "#B2DF28",
        gray: "#3B3D3F",
        grayCard: "#404244",
        grayLight: "#989A9C",
        alive: "#00FF80",
        dead: "#FF1E00",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
