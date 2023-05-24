/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [ './**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        buttonbackground: '#E50914',
        buttonhover: '#E50815',
        bodybackground: '#00081D',
        gradientBlack: 'rgba(0, 0, 0, 0.42)',
        gradientRed: 'rgba(132, 5, 25, 0.6)',
        input: 'rgba(0, 0, 0, 0.75)',
        hr: 'rgba(255, 255, 255, 0.1)',
        special: 'rgba(0, 8, 29, 0.75)',
        specialtwo: 'rgba(53, 13, 49, 0.6)',
        specialthree: 'rgba(132, 5, 25, 0.6)',
        sss: '#132144',
        footer: '#ffffffB3'
      },
      backgroundImage:{
        'mainBackground': "url('./img/mainBackground.jpeg')",
        'globe': "url(./img/globe.png)",
      },
      gradientColorStartPositions: {
        75: '75%',
      },
      height: {
        '600': '600px',
      },
      spacing: {
        '54': '54%',
        '93': '93%',
      },
      fontSize: {
        '32': '32px',
        '40': '40px'
      }
    },
  },
  plugins: [],
}

