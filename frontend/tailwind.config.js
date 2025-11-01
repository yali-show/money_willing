// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Tus keyframes y animation (estos ya estaban bien)
      keyframes: {
        twinkle: {
          '0%': { filter: 'drop-shadow(0 0 4px #ff3b3b)', opacity: '0.9' },
          '25%': { filter: 'drop-shadow(0 0 5px #ffeb3b)', opacity: '1' },
          '50%': { filter: 'drop-shadow(0 0 5px #4caf50)', opacity: '0.8' },
          '75%': { filter: 'drop-shadow(0 0 5px #2196f3)', opacity: '1' },
          '100%': { filter: 'drop-shadow(0 0 4px #ff3b3b)', opacity: '0.9' },
        },
      },
      animation: {
        twinkle: 'twinkle 2s infinite ease-in-out',
      },
      maskImage: { 
        'wavy-line': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3e%3cpath d='M0,5 C30,20 70,20 100,5' fill='none' stroke='white' stroke-width='4'/%3e%3c/svg%3e")`,
      },
      // ------------------------------------
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './frontend/pages/**/*.{js,ts,jsx,tsx}',
    './frontend/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  // ... el resto de tu configuración ...
};