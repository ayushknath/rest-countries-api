/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        darkFloat: "#2b3743",
        darkBase: "#202d36",
        lightBase: "#fafafa",
      },
    },
  },
  plugins: [],
};
