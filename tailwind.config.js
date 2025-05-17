/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#00ff9d",
        tertiary: "#a0a0a0",
        light: "#ffffff",
        dark: "#1a1a1a",
        accent: "#ff3366"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 