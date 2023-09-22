/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
      colors: {
        white: '#FFFFFF',
        cream: '#F2EAE2',
        grey: '#6C7289',
        green: '#3D8168',
        darkGreen: '#1A4032',
        blue: '#1C232B'
      },
      fontSize: {
        'display': [
          '32px',
          { lineHeight: '32px', fontWeight: 'bold', fontFamily: ['Fraunces', 'serif'] },
        ],
        'body': [
          '14px',
          { lineHeight: '23px', fontWeight: 'medium', fontFamily: ['Montserrat', 'sans-serif'] },
        ],
        'button': [
          '14px',
          { fontWeight: 'bold', fontFamily: ['Montserrat', 'sans-serif'] },
        ],
        'overline': [
          '12px',
          { fontWeight: 'medium', letterSpacing: '5px', fontFamily: ['Montserrat', 'sans-serif'] },
        ],
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {},
      backgroundImage: {},
      container: {
        center: true,
        padding: '1rem',
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
      },
    },
  },
  plugins: [],
};
