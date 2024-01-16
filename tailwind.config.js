/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'purpura': '#4443D8',
      'fondocolor': '#CADAEA',
      'negro': '#353A40',
      'blanco': '#f1f1f1',
    },
  },
  extend: {
    fill: { 
      red: '#ff0000', 
      purpura: '#4443D8',
    },
    
  },
  plugins: [],
};
