/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "*.{html,js}", "./public/*.html"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        "card-blue": "#173F4B",
        "card-blue-light": "#3C7F90",
        teal: "#00B897",
        blue: "#3C7F90",
      },
    },
  },
  plugins: [],
};
