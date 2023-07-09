/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        logo: [ 'Poppins', 'sans-serif'],
        clock: [ 'Rajdhani', 'sans-serif']
      },
      colors: {
        primary: 'rgb(86,0,227)',
        secondary: 'rgb(255,19,104)',
        tertiary: 'rgb(217,225,255)',
      }
    },
  },
  plugins: [],
}
