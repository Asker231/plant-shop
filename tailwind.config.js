/** @type {import('tailwindcss').Config} */
export default {
  content: [

      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#166963",
        "prmary2":"#2C1500"
      }
    },
  },
  plugins: [],
}

