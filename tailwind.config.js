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
        softGray: '#ffffff66',
        lightText: '#ffffffbf'
      },
      fontFamily: {
        mona: ['Mona Sans', 'sans-serif'],
        dm: ['"DM Mono"', 'monospace'],
        syne: ['"Syne"', 'sans-serif'],
      },
    }, 
  },
  plugins: []
}