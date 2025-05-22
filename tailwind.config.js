/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff",
        secondary: "#ffffff",     
        secondaryText: '#b0b0b0',
        tertiary: "#663399", 
        tertiaryAccent:"#4b256d",     
        background: "#080808",    
        accent: '#00b7b7',

        border: '#333333',
        neon: "#39ff14",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '4.0rem' }],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "728px",
      md: "1060px",
      lg: "1200px",
      xl: "1800px",
      xxl: "2800px",
      xxxl: "3400px",
    },
  },
  plugins: [],
}
