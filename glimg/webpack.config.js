const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'glimg.bundle.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new WebpackShellPlugin({onBuildStart:['echo Webpack Start'], onBuildEnd:['echo start copy bundle file to examples', 'cp ./dist/*.js ./examples/.', 'echo Webpack End']})
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};


