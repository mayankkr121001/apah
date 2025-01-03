/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1a8b47', 
        primaryColorHover: '#16753c', 
        primaryBgColor: '#f4fff8',
      },
      fontFamily: {
        fredoka: ["Fredoka", "serif"],
        quicksand: ["Quicksand", "serif"],
        assistant: ["Assistant", "serif"]
      }
    },
  },
  plugins: [],
}