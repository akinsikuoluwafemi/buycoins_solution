const path = require('path');
const webpack = require("webpack");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, ".env"),
});


module.exports = {
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_KE": JSON.stringify("5667f344fc3f15486408373bacf0932afb9f6017"),
    }),
  ],
};



