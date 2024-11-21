/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
        judson: ["Judson", "serif"],
        "sf-pro": ["SF Pro Text", "sans-serif"],
      },
      screens: {
        sm: "440px",
        xs: { max: "440px" },
      },
    },
  },
  plugins: [],
};
