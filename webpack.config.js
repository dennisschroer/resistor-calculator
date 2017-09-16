const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const packageJson = require('./package.json');

isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity
  }),
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    template: 'src/index.ejs',
    version: packageJson.version
  })
];

if (isProduction) {
  plugins.push(new UglifyJSPlugin({ sourceMap: true }));
}

module.exports = {
  entry: {
    vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-material', 'angular-material/angular-material.css'],
    app: './src/app.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: isProduction } }, 'less-loader']
        })
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: isProduction } }]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }

        ]
      }
    ]
  }
};
