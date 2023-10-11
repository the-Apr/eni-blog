/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  corePlugins: {
    preflight: false,
  },
  
  theme: {
    container: {
      padding: '2rem',
      center: true
    },

    extend: {
      screens: {
        'xs': '475px'
      },
    },
  },
  plugins: [],
}

