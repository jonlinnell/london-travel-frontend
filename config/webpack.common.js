/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const title = 'London Travel'

module.exports = {
  entry: resolve(__dirname, '../src/index.jsx'),
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[hash].[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[hash].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/template.html'),
      output: resolve(__dirname, '../dist/index.html'),
      title,
    }),
    new Dotenv()
    // new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
