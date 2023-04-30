/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "991px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: "#7E90FE",
        light: "#757575",
        dark: "#00000",
      },
    },
  },
  plugins: [require("tailwind-bootstrap-grid")],
};
