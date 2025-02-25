const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: [
      path.join(__dirname, "dist"),
      path.join(__dirname, "public")
    ],
    compress: true,
    port: 3000,
  },
  
  mode: "development",
};
