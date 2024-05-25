/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "#4b0082" },
        },
      },
      animation: {
        typing: "typing 2s steps(40, end), blink .75s step-end infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
