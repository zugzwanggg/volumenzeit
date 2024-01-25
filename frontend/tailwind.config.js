/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#939393",
        blue: "#735CFF",
        red: "#FF8585"
      },
      screens: {
        sm: "768px",
        md: "1024px"
      },
      container: {
        center: true,
        padding: "1rem"
      }
    },
  },
  plugins: [],
}

