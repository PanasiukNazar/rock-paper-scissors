const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerExtractPlugin = require('css-minimizer-webpack-plugin');
const TraserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
   const isProduction = env.production;

   const optimizeJs = isProduction ? 'main.[contenthash].js' : 'main.js';
   const optimizeCss = isProduction ? 'main.[contenthash].css' : 'main.css';

   return {
      mode: isProduction ? 'production' : 'development',

      entry: './src/app/main.js',

      output: {
         filename: optimizeJs,
         path: path.resolve(__dirname, 'dist'),
      },

      optimization: {
         minimizer: [
            new CssMinimizerExtractPlugin(),
            new TraserWebpackPlugin(),
         ],
      },

      devtool: 'source-map',

      plugins: [
         new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
               removeAttributeQuotes: isProduction,
               collapseInlineTagWhitespace: isProduction,
               removeComments: isProduction,
            },
         }),

         new CleanWebpackPlugin(),

         new MiniCssExtractPlugin({
            filename: './src/style/main.scss',
            filename: optimizeCss,
         }),

         new CopyWebpackPlugin({
            patterns: [
               {
                  from: path.resolve(__dirname, './src/assets'),
                  to: path.resolve(__dirname, 'dist/assets'),
                  noErrorOnMissing: true,
               },
            ],
         }),
      ],

      module: {
         rules: [
            {
               test: /\.css&/,
               use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
               test: /\.s[ca]ss/,
               use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
         ],
      },

      devServer: {
         hot: false,
      },
   };
};
