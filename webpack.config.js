module.exports = {
    entry: "./src/index.js",
    output: {
      path: __dirname + '/dist',
      filename: 'index.js'
    },
    devServer: {
      contentBase: __dirname + '/dist',
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"],
        }
      ],
    },
    externals:[{
      xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }]
  };