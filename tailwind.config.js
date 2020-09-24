module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      fontFamily: {
        body: ['Nunito'],
      },
      colors: {
        'cadet-blue': '#5F9EA0',
      },
      spacing: {
        '1p': '1px',
        '2p': '2px',
        '3p': '3px',
        '4p': '4px',
        '5p': '5px',
      },
      inset: {
        '1/2': '50%',
        '33p': '33%',
        '36p': '36%',
        10: '10px',
        n2: '-2px',
        2: '2px',
        n1: '-1px',
        1: '1px',
        50: '50px',
      },
      translate: {
        'n1/2': '-50%',
      },
      minWidth: {
        700: '700px',
        135: '135px',
      },
      minHeight: {
        243: '243px',
      },
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
  },
  plugins: [require('tailwindcss-blend-mode')()],
};
