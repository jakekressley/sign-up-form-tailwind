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
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
    height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
    width: {
			"10v": "10vw",
			"20v": "20vw",
			"30v": "30vw",
			"40v": "40vw",
			"50v": "50vw",
			"60v": "60vw",
			"70v": "70vw",
			"80v": "80vw",
			"90v": "90vw",
			"100v": "100vw",
		},
  },
  plugins: [],
}

