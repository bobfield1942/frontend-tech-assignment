/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        "card-blue": "#173F4B",
        "line-teal": "#00B897",
      },
    },
  },
  plugins: [],
};
