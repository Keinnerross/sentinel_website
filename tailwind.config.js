/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header-shadow': '0 4px 10px rgba(0, 0, 0, 0.25)', // Cambia los valores según lo necesites
      },

      colors: {
        blueMainLight: "#10305f", // Color principal personalizado
        blueMain: "#131e46", // Color principal personalizado

        secondary: "#ff5722", // Color secundario personalizado
        customGray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
    },
  },
  plugins: [],
}
