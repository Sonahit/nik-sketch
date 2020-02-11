const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const webpack = require("webpack");
const path = require("path");

const dev = merge(base, {
  mode: "development",
  devServer: {
    port: 8000,
    hot: true,
    contentBase: path.resolve(__dirname, "../public")
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "eval-source-map"
});

module.exports = dev;
