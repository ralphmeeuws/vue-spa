const webpack = require('webpack')
const objClientConfig = require('./webpack.client.config')
const objServerConfig = require('./webpack.server.config')
const MFS = require('memory-fs')
const path = require('path')

module.exports = function setupDevServer (appServer, onUpdate) {
  objClientConfig.entry.appScript = [
    'webpack-hot-middleware/client',
    objClientConfig.entry.appScript
  ]

  objClientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  const clientCompiler = webpack(objClientConfig)

  appServer.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  )

  appServer.use(require('webpack-hot-middleware')(clientCompiler))

  const serverCompiler = webpack(objServerConfig)
  const mfs = new MFS()
  const outputPath = path.join(objServerConfig.output.path, 'server/main.js')
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, () => {
    onUpdate(mfs.readFileSync(outputPath, 'utf-8'))
  })
}
