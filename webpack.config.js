
module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './public/scripts/main.js'
  ],
  output: {
    path: require("path").resolve("./public/scripts/dist"),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
