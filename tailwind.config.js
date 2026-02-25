/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This scans all your React files for styles
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom professional colors here later!
        brand: "#4F46E5", 
      },
    },
  },
  plugins: [],
}