const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

 module.exports = (config) => {
     const compiler = webpack(config)

     const devServerOptions = Object.assign({}, config.derServer, {
         open: true,
         stats: {
             colors: true
         }
     })

     const server = new webpackDevServer(compiler, devServerOptions)

     server.listen(34567, '0.0.0.0', err => {
         if (err) {
            console.log(err)
            process.exit(1)
         }
     })
 }