module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'purpura': '#4443D8',
      'fondocolor': '#CADAEA',
      'negro': '#353A40',
      'blacky': '#0A0B0C',
      'blanco': '#f1f1f1',
      'borde': '#3B3D41',
      'blanko': '#BBC7D6',
    },
    extend: {
      backgroundImage: {
        'degradado-black': 'linear-gradient(300deg, rgba(131, 133, 136, 0.18) 19.16%, rgba(241, 241, 241, 0.00) 78.89%)',
        'customgradient': 'linear-gradient(180deg, #CADAEA 20%, rgba(202, 218, 234, 0.82) 40%, rgba(202, 218, 234, 0.40) 80.5%, rgba(202, 218, 234, 0.00) 100%)',
        'customgradientb': 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)',
        'bgdarky': 'conic-gradient(from 248deg at 50% 10.18%, rgba(202, 218, 234, 0.32) 0deg, rgba(241, 241, 241, 0.32) 360deg), #CADAEA',
        'bglight': 'conic-gradient(from 248deg at 50% 10.18%, rgba(53, 58, 64, 0.32) 0deg, rgba(0, 0, 0, 0.32) 360deg), linear-gradient(180deg, rgba(53, 58, 64, 0.20) 0%, rgba(53, 58, 64, 0.20) 100%), #000',
      },
      fill: { 
        red: '#ff0000', 
        purpura: '#4443D8',
      },
    },
  },
  plugins: [],
};
