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
    screens: {
      lg: { max: "1880px" },

      sm: { max: "1000px" },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
