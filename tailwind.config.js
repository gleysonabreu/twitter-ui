/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1DA1F2",
          background: "#121214",
          text: {
            black: {
              900: "#0F1419",
            }
          }
        }
      }
    },
  },
  plugins: [],
}
