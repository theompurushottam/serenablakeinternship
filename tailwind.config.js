/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#385A64",
          light: "#4f7b8c",
        },
        accent: "#CCEDE4",
      },
    },
  },
  plugins: [],
};