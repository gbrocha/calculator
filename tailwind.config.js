module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
