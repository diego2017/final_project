const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([{from: "./app/css/", to: "./css"}]);

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.ejs",
  filename: "index.html",
  inject: 'body',
  api_host: "foo"
})
const webpack = require('webpack');

module.exports = {
  entry: [
    __dirname + "/app/index.jsx"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    CopyWebpackPluginConfig,
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
