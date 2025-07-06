/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#6366f1',
        secondary: '#06b6d4',
        dark: '#18181b',
        light: '#f8fafc',
        tertiary: '#64748b',
      },
    },
  },
  plugins: [],
} 