// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6', // Ejemplo: añade colores personalizados
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Ejemplo: añade fuentes personalizadas
      },
  },
  plugins: []
}
}