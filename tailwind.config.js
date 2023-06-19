/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px', 
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        tailwindBlue: '#01b7d6',
      }
    },
  },
  plugins: [],
}

