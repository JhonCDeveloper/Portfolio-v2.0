export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: '#000000',
        fontGray: '#BDBEBE',
        darkRed: '#7D0A0A',
      },
      fontFamily: {
        mona: ['Mona Sans', 'sans-serif'],
      },
    }, 
  },
  plugins: []
}