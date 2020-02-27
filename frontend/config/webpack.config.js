// const path = require("path");

module.exports = {
  entry: { apps: "./frontend/src/apps.js" },
  output: {
    filename: "[name].js",
    publicPath: "http://localhost:3500/"
  },
  mode: "development",
  devServer: {
    public: "127.0.0.1:3500",
    publicPath: "/",
    compress: true,
    port: 3500,
    progress: true,
    // inline: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    sockPort: 3500
  }
};
