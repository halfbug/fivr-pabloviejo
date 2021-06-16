module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        
        green: {
          100: '#f7fafc',
          600: '#006837',
          800: '#013b20',
          900: '#001a0e',
        },
        gray: {
          100: '#ebebeb',
          200: '#00000029',
          300: '#e3e3e3',
          400: '#c9c9c9',
          600: '#707070',
          800: '#313131',
        },
        // ...
      },
      extend: {
        spacing: {
          '128': '32rem'
        }      
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [
    //  require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }