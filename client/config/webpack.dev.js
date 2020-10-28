const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: paths.appPublic,
    hot: true,
    port: 8080
  },
  devtool: "source-map"
});
