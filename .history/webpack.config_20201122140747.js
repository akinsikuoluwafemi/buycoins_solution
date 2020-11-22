const path = require('path');
const DotenvWebpackPlugin = require('dotenv-webpack');
import dotenv from 'dotenv';
dotenv.config();
    new DotenvWebpackPlugin(),
      (module.exports = {
        entry: ["babel-polyfill", "./src/app.js"],
        output: {
          path: path.resolve(__dirname, "src"),
          filename: "js/bundle.js",
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
              },
            },
          ],
        },
        plugins: [new DotenvWebpackPlugin()],
      });



