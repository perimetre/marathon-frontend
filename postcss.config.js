module.exports = {
  plugins: {
    'postcss-import': {}, // Import must come before tailwind
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-combine-media-query': {}, // Media query must come before duplicated-selectors
    'postcss-combine-duplicated-selectors': {},
    autoprefixer: {}
  }
};
