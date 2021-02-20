const path = require("path");
const version = require("./package.json")["version"];

module.exports = {
  target: ["web", "es5"],
  entry: "./src/index.js",
  mode: "production", //process.env.NODE_ENV,
  devtool: false, // process.env.NODE_ENV !== 'production' ? 'source-map' : false,
  output: {
    filename: `example-${version}.js`,
    path: path.resolve(__dirname, "dist"),
    library: "$",
    libraryTarget: "umd",
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "babel-loader",
      },
    ],
  },
};
