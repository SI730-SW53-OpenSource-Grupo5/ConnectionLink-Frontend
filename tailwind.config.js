/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      }
    }
  },
  variants: {},
  plugins: [],
}
