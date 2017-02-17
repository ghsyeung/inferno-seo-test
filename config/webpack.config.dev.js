const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/client/index.ts", // Point to main file
  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ["browser", "main", "module"]
  },
  performance: {
    hints: false
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,                          // All ts and tsx files will be process by
        loaders: ['babel-loader', 'ts-loader'], // first babel-loader, then ts-loader
        exclude: /node_modules/                   // ignore node_modules
      }, {
        test: /\.jsx?$/,                          // all js and jsx files will be processed by
        loader: 'babel-loader',                   // babel-loader
        exclude: /node_modules/                  // ignore node_modules
      },
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ]
      },
    ]
  },
  devServer: {
    contentBase: "dist/",
    historyApiFallback: true
  }
  ,
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: "./src/client/index.html",
        inject: "body"
      }
    ),
    new CleanWebpackPlugin(
      ["dist"], {
        verbose: true
      }
    ),
    // By default, webpack does `n=>n` compilation with entry files. This concatenates
    // them into a single chunk.
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
;
