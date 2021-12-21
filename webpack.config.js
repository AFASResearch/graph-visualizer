const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/demo/demo.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Graph visualizer',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        options: {
          exportType: 'css-style-sheet'
        },
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/webpack'),
  }
};
