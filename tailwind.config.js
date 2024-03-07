/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C4B7CB",
        secondary: "#D69485",
        tertiary: "#F5F3F6",
        background: "#272727",
      },
    },
  },
  plugins: [],
};
