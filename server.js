const express = require('express')
const appServer = express()
const fs = require('fs')
const path = require('path')
const serialize = require('serialize-javascript')
const { createBundleRenderer } = require('vue-server-renderer')
const blnIsProd = typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV === 'production')
let renderer

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

if (blnIsProd) {
  appServer.use('/', express.static(path.resolve(__dirname, './dist')))
} else {
  appServer.use('/dist', express.static(path.resolve(__dirname, './dist')))
}

if (blnIsProd) {
  const bundlePath = path.resolve(__dirname, './dist/server/main.js')
  renderer = createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'))
} else {
  require('./build/dev-server')(appServer, bundle => {
    renderer = createBundleRenderer(bundle)
  })
}

appServer.get('*', (request, response) => {
  const context = { url: request.url }
  renderer.renderToString(context, (error, html) => {
    if (error) {
      return response.status(500).send('Server Error')
    }
    html = indexHTML.replace('{{ APP }}', html) // Writes server-generated HTML to the front-end.
    html = html.replace('{{ STATE }}', `<script>window.__INITIAL_STATE__=${serialize(context.initialState, {isJSON: true})}</script>`)
    response.write(html)
    response.end()
  })
})

const port = process.env.PORT || 3003
appServer.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`)
})
