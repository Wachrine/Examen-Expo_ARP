/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Background: "#F2F0ED",
        Myred: "#E7554B",
        yellow: "#FCED50",
        blue: "#869DBB",
        beige: "#F2E9D8",
      },
      fontFamily: {
        Orbitron: ['"Orbitron"', "sans-serif"],
        Montserrat: ['"Montserrat"', "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
      screens: {
        phone:"375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        'xxl': '1536px',
      },
      zIndex: {
        100: "100",
        200: "200",
        400: "400",
        700: "700",
        800: "800",
        900: "900",
      },
    },
  },
  plugins: [],
};
