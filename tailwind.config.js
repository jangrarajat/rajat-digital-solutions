/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        secondary: "#111111",
        accent: "#00BFFF",
      },
    },
  },
  plugins: [],
}
