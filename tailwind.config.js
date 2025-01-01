/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Background:"#F2F0ED",
        Myred:"#E7554B",
        yellow:"#FCED50",
        blue:"#869DBB",
        beige:"#F2E9D8",
      },
      fontFamily: {
        Orbitron: ['"Orbitron"', "sans-serif"],
        Montserrat: ['"Montserrat"', "sans-serif"],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};

