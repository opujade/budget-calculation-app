/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('./src/assets/header-background.jpg')",
      },
      borderRadius: {
        largest: '2.5rem',
      },
      colors: {
        secondary: 'emerald-500',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          '.bg-header-pattern': {
            'background-image':
              "url('./src/assets/header-background.jpg')",
          }        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          '.bg-header-pattern': {
            'background-image':
              "url('./src/assets/header-background-dark.jpeg')",
          },
        },
      },
      {
        cupcake: {
          ...require('daisyui/src/theming/themes')['cupcake'],
          '.bg-header-pattern': {
            'background-image':
              "url('./src/assets/header-background.jpg')",
          }        },
      },
    ],
  },
};
