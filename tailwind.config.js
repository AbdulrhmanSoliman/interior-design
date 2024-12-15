/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1f1f1f",
      secondary: "#545454",
      white: "#ffffff",
    },
  },
  plugins: [],
};
