/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'va-green':  '#7a9070',
        'va-cream':  '#f5f1eb',
        'va-warm':   '#ede8e0',
        'va-taupe':  '#9a9088',
        'va-dark':   '#2c2820',
        'va-gold':   '#c9a96e',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans:  ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}