/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#34b38a",
        semiAccentColor: "#4ecca3",
        lightAccentColor: "#76d7b8",
        darkColor: "#0e1013",
        semiDarkColor: "#232931",
        lightDarkColor: "#38424f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
