const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#F7FAFC',
          dominant: '#4F24E3',
          complementary: '#FFD2D5',
          yellow: '#FBE7C6',
          navbar: '#FFFFFF',
          border: '#E2E8F0',
        },
        text: {
          darkMain: '#1A202C',
        },
      },
      fontSize: {
        '3xl': [
          '2rem',
          {
            lineHeight: '38px',
            letterSpacing: '-0.02em',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [],
});
