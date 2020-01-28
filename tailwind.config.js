const tw = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        'transparent-black': 'hsla(0, 0%, 0%, 0.5)',
        gray: {
          ...tw.colors.gray,
          '200': '#f3f3f4',
        },
      },
      fontFamily: {
        sans: ['Gibson', ...tw.fontFamily.sans],
      },
      maxWidth: {
        '1920': '1920px',
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
