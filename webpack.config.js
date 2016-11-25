module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "dist/"
  }
};