const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    '*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mn': '480px',
      ...defaultTheme.screens,
    },
    
    extend: {
      maxWidth: {
        'lt': '0.5rem',
        '1lt': '1rem',
        '2lt': '1.5rem',
        '3lt': '8rem',
        '4lt': '10rem',
        '5lt': '12rem',
      },

      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'lt': '2rem',
        '1lt': '4rem',
        '2lt': '8rem',
        '3lt': '12rem',
        '4lt': '16rem',
        'full': '100%',
      },

      gridTemplateRows: {
       '7': 'repeat(7, minmax(0, max-content))',
      },

      colors: {
        primary: {
          100: '#c8c3cc',
          200: '#96897f',
          300: '#625750',
          400: '#563f46',
          500: '#4f3222',
        },
        
        secondary: {
          100: '#484f4f',
          200: '#0d3d56'
        },
      },

      fontFamily: {
        lato: ['Lato'],
        itim: ['Itim'],
        dance: ['Dancing Script'],
        nova: ['Nova Flat'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
