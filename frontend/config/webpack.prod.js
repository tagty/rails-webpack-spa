const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("public/assets"),
    publicPath: "/assets/"
  },
  plugins: [new ManifestPlugin()]
});
