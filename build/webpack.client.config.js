const objBaseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const objClientConfig = Object.assign({}, objBaseConfig, {
  plugins: (objBaseConfig.plugins || []).concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/[name].js'
    })
  ])
})

objClientConfig.module.rules
  .filter(x => { return x.loader === 'vue-loader' })
  .forEach(x => { x.options.extractCSS = true })

objClientConfig.plugins.push(
  new ExtractTextPlugin('assets/styles.css')
)

if (process.env.NODE_ENV === 'production') {
  objClientConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = objClientConfig
