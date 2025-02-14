/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        beige: {
          50: '#FDFBF6',
          100: '#FAF6ED',
          200: '#F5EDE0',
          300: '#EFE4D3',
        },
        charcoal: {
          700: '#2C2C2C',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
}
