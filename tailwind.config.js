const tw = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...tw.fontFamily.sans],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
