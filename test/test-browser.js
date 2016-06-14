var jsdom = require('jsdom')
var fs = require('fs')
var path = require('path')
var util = require('./util')

var libDir = path.join(__dirname, '..', 'lib', 'index.js')
var isBrowserCode = fs.readFileSync(libDir, 'utf-8')
var nodeEnv = require('../lib/index')

if (nodeEnv.isNode && !nodeEnv.isBrowser && !nodeEnv.isReactNative) {
  util.logError(
    'Tests failed:\n\tYou must run this test only with `npm test`'
  )
  process.exit()
}
else {
  jsdom.env({
    html: '<html></html>',
    src: [ isBrowserCode ],
    done: function (err, window) {
      if (err) {
        util.logError('Test failed for browser environment with error:\n\t', err.stack || err)
        return
      }

      var winEnv = window.__actressEnv__

      if (! winEnv.isBrowser || winEnv.isNode || winEnv.isReactNative) {
        util.logError('Test failed for browser environment:\n\t', winEnv)
        return
      }

      util.logSuccess('Test passed for browser environment')
    }
  })
}