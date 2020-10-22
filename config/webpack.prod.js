const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const paths = require("./paths");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.js",
    path: paths.appBuild,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
