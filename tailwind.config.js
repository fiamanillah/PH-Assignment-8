/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl-d': { max: '1535px' },

        'xl-l': { max: '1279px' },

        'lg-t': { max: '1023px' },

        'md-p': { max: '767px' },

        'sm-p': { max: '639px' },
      },colors:{
        "primary" : "#9538e2"
      },backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #9538e2 30%, #f1f5f9 30%)',
      },
    },
  },
  plugins: [
    typography,
    // Add other plugins here if needed
  ],
}
