module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    ,
    './public/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
