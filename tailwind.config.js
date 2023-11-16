/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_100: "#FFF9E6",
        bg_200: "#f5efdc",
        bg_300: "#ccc6b4",
        primary_100: "#FFD700",
        primary_200: "#ddb900",
        primary_300: "#917800",
        accent_100: "#FFB300",
        accent_200: "#905700",
        text_100: "#333333",
        text_200: "#5c5c5c",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
