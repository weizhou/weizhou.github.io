const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
 
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'glimg.bundle.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './dist/glimg.bundle.js', to: '../../webgl/' },
      ],
    }),
  ],
};