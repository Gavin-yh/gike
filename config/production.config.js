const baseConfig = require('./default.config')
const merge = require('deepmerge')

module.exports = merge(baseConfig, {
  mode: 'production',
});