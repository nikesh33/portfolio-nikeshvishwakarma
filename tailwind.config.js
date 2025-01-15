/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#393E46", // Custom background color
        "dark-bg": "#222831", // Dark background color
        "light-bg": "#EEEEEE", // Light background color
        "teal-light": "#4fd1c5", // Lighter teal color for active link
        "teal-dark": "#319795", // Darker teal color for active link text
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
