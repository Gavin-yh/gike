const fs = require('fs-extra')
const webpack = require('webpack')
const defaultConfig = require('./config/default.config')
const merge = require('deepmerge')
const rootPath = process.cwd()

function getCustomConfig() {
    const configPath = `${rootPath}/gike.config.js`
     
    if (fs.existsSync(configPath)) {
        return require(`${configPath}`)
    }

    return {}
}

module.exports = (options) => {
    const mode = options.mode
    const config = require(`./config/${mode}.config`)
    const customConfig = getCustomConfig()
    const resultConfig = merge(defaultConfig, config, customConfig)

    return {
        compiler: webpack(resultConfig),
        config: resultConfig
    }
}