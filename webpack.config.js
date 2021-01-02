const path = require('path')

module.exports = {
  target: 'webworker',
  entry: './src/index.ts',
  mode: 'production',
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'worker.js'
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
  },
}
