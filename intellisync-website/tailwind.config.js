module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D0F', // Obsidian Black
        accent1: '#C6A76D', // Quantum Gold
        accent2: '#2E2F33', // Graphite Gray
        background: '#1A1B1E', // Ultra Charcoal
        surface: '#EDEDED', // Platinum Fog
        cta: '#4C5BFF', // Electric Ink
        error: '#D72638', // Warning Merlot
      },
      fontFamily: {
        header: ['DM Serif Display', 'Playfair Display', 'serif'],
        body: ['Inter', 'Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
