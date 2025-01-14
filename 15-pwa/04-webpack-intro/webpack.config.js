const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    // TODO: The output.filename specifies the name of the bundled file.
    //       The output.path specifies the directory where the bundled file will be placed (dist folder).
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};