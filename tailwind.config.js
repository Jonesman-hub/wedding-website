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
        sage: {
          50: '#F5F7F5',
          100: '#E6EBE6',
          200: '#D1DBD1',
          300: '#BDCBBD',
          400: '#A8BBA8',
        },
        champagne: {
          50: '#FDF8F5',
          100: '#FAF1EB',
          200: '#F5E3D7',
          300: '#F0D5C3',
        },
        charcoal: {
          700: '#2C2C2C',
          800: '#262626',
          900: '#171717',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
