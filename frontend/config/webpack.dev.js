const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    publicPath: "http://localhost:3500/"
  },
  devServer: {
    public: "127.0.0.1:3500",
    publicPath: "/",
    compress: true,
    port: 3500,
    progress: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    sockPort: 3500
  }
});
