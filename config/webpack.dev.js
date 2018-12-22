/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { resolve } = require('path')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
  },
})
