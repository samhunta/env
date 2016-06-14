var nodeEnv = require('../lib/index')
var util = require('./util')

if (! nodeEnv.isBrowser && nodeEnv.hasGlobal && nodeEnv) {
  util.logSuccess('Test passed for node environment')
} else {
  util.logError('Test failed for node environment:\r\t', nodeEnv)
}