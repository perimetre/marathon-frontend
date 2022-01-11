const path = require('path');

module.exports = {
  'src/**/*': 'prettier --ignore-unknown --write',
  'src/**/*.+(js|jsx|ts|tsx)': (filenames) => {
    const relativeFilenames = filenames
      // Completely removes the current path(at __dirname) to an absolute path
      // By replacing the initial part of the string to nothing
      .map((x) => path.normalize(x).replace(path.resolve(__dirname), ''))
      .join(' --file ');
    return `next lint --fix --file ${relativeFilenames}`;
  },
  // Make sure to keep forward slash on stylelint
  'src/**/*.+(css|scss)': 'stylelint --fix',
  'src/**/*.ts?(x)': 'eslint --fix --plugin tsc --rule \'tsc/config: [2, {configFile: "./tsconfig.json"}]\''
};
