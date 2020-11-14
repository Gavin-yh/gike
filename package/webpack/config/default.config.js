const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const rootPath = process.cwd()

module.exports = {
  entry: {
    app: path.join(rootPath, 'src/app.jsx'),
  },
  output: {
    path: path.join(rootPath, 'build'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [
          path.resolve(rootPath, 'src'),
          path.resolve(rootPath, 'node_modules/antd')
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
