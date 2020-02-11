const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const BUILD_BASE = path.resolve(__dirname, "../dist");
const config = require("./config/config");
const assetsConfig = require("../assetsProviderServer/config");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");

const baseConfig = {
  mode: "none",
  entry: {
    app: path.resolve(__dirname, "./entry.js")
  },
  output: {
    filename: config.isProduction
      ? "[name].[hash].bundle.js"
      : "[name].bundle.js",
    path: BUILD_BASE
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@public": path.resolve(__dirname, "./public"),
      "@utils": path.resolve(__dirname, "./utils"),
      "@img": path.resolve(__dirname, "./assets/img"),
      "@sass": path.resolve(__dirname, "./assets/sass"),
      "@assets": path.resolve(__dirname, "./assets"),
      "@static": path.resolve(__dirname, "./static")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: config.isProduction,
              reloadAll: true
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.pug$/,
        use: "pug-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.isProduction ? "index.prod.html" : "index.html",
      hash: config.isProduction,
      template: path.resolve(__dirname, "../public/index.pug"),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: config.isProduction
        ? `css/[name].[hash].css`
        : `css/[name].css`,
      chunkFilename: config.isProduction
        ? `css/[id].[hash].css`
        : `css/[id].css`,
      ignoreOrder: false
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPugPlugin({
      adjustIndent: true
    })
  ]
};

module.exports = baseConfig;
