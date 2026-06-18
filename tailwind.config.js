/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './public/**/*.{html,js}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        indiaWhite: '#FFFFFF',
        indiaGreen: '#138808',
        highContrastYellow: '#FFFF00',
        highContrastBlack: '#000000',
        safeZone: '#00C851',
        dangerZone: '#ff4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
