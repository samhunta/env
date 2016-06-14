var chalk = require('chalk')

module.exports = {
  logError: function () {
    var args = Array.prototype.slice.call(arguments)
    args[0] = chalk.bold.red(args[0])
    console.log.apply(console, args)
  },
  logSuccess: function () {
    var args = Array.prototype.slice.call(arguments)
    args[0] = chalk.green(args[0])
    console.log.apply(console, args)
  }
}