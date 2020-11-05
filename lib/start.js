const fs = require('fs-extra')
const rootPath = process.cwd()
const defaultConfig = require('../config/default.config')
const merge = require('deepmerge')
const server = require('./webpack/server')

// const { spawn } = require('child_process') 
//研究下，怎么用进程去执行命令

function getCustomConfig() {
    const configPath = `${rootPath}/gik.config.js`

    if(fs.existsSync(configPath)) {
        return require(`${configPath}`)
    }

    return {}
}

module.exports = (options) => {
    const mode = options.mode
    const config = require(`../config/${mode}.config`)
    const customConfig = getCustomConfig()
    const resultConfig = merge(defaultConfig, config, customConfig)

    //执行起来有问题
    // spawn('webpack-dev-server', ['--config', `../config/${mode}.config.js`], { stdio: 'inherit' });

    server(resultConfig)
}