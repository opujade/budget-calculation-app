/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('./src/assets/header-background.jpg')"
      },
      borderRadius: {
        'largest': '2.5rem'
      },
      colors: {
        'secondary': 'emerald-500'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'bumblebee'],
  },
};
