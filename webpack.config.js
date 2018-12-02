const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        // Source maps for typescript files
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.js(x)?$/,
        loader: "babel-loader"
      }
    ]
  },
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".min.js"],
    modules: [__dirname, "node_modules"]
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    watchOptions: {
      ignored: /node_modules/
    },
    stats: "errors-only",
    compress: true,
    overlay: { errors: true, warnings: true },
    hot: true
  }
};
