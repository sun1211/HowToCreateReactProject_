module.exports = {
  entry: './main.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: '/',
    filename: 'bundles.js',
 },
 devServer: {
  host:'000.000.00.00',
  port: 8080
}
};
