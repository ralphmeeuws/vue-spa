const objBaseConfig = require('./webpack.base.config.js')

let objTestConfig = Object.assign({}, objBaseConfig, {})

// No need for app entry during tests, because the code won't be compiled, so remove it.
delete objTestConfig.entry

module.exports = objTestConfig
