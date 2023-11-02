
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFBF3",
        secondary: "#FDAE51",
        sos: "#A71B00",
        txt: "#1B3004",
      },
      fontFamily: {
        family: "Open Sans', sans-serif",
      },
    },
  },
  plugins: [],
};

