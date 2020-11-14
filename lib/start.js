const init = require('../package/webpack/init')
const webpackDevServer = require('webpack-dev-server')

// const { spawn } = require('child_process') 
//研究下，怎么用进程去执行命令

module.exports = (options) => {

    //执行起来有问题
    // spawn('webpack-dev-server', ['--config', `../config/${mode}.config.js`], { stdio: 'inherit' });
    const { compiler, config } = init(options)

    const devServerOptions = Object.assign({}, config.derServer, {
        open: true,
        stats: {
            colors: true
        }
    })
        
    const port = config.derServer && config.derServer.port || 12345

    const serve = new webpackDevServer(compiler, devServerOptions)

    serve.listen(port, '0.0.0.0', err => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
    }) 
}