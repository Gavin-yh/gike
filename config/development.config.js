const path = require('path')
const rootPath = process.cwd()

module.exports = {
  output: {
  path: path.join(rootPath, 'dev-build'),
    // 指定 publicPath 避免热更新配置请求失败
    publicPath: `http://localhost:34687/`,
  },
  // stats: 'verbose',
  devServer: {
    contentBase: path.join(rootPath, 'dev-build'),
    host: '0.0.0.0',
    hot: true,
    overlay: true,
    port: 8009,
    // stats: 'errors-only',
    // stats: 'verbose',
    watchOptions: {
      aggregateTimeout: 600,
      poll: 600,
    },
    writeToDisk: true,
    // 子核放开跨域通讯
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
}
