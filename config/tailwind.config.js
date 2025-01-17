const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      copper: {
        100: "#FAD9C1",
        200: "#F6C8A4",
        300: "#F2B786",
        400: "#EEA669",
        500: "#E9944C",
        600: "#D17F3E",
        700: "#B96A31",
        800: "#A15524",
        900: "#8A4018",
        dark: "#8A4018",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
  fontFamily: {
    serif: ["Times", "serif"],
  },
  extend: {
    spacing: {
      "8xl": "108rem",
    },
  },
}
