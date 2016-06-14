(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.__actressEnv__ = factory()
  }
}(this, function () {
  var result = {
    isBundler: false,
    hasRequire: typeof require === 'function',
    hasWindow: typeof window === 'object' &&
      typeof document === 'object',
    hasProcess: typeof process === 'object' &&
    typeof process.exit !== 'function',
  }
  result.hasGlobal = typeof global === 'object' &&
    (!result.hasWindow || window !== global)
  result.isNode = result.hasProcess && result.hasRequire
  result.isReactNative = (
    result.hasGlobal &&
    result.hasWindow &&
    typeof global.nativeRequireModuleConfig === 'function'
  )

  if (result.isReactNative) {
    result.target = 'react-native'
    result.isBrowser = false
  }
  else {
    var isBrowser = (!result.hasGlobal ||
      typeof process !== 'object' ||
      typeof process.exit !== 'function')
    result.target = isBrowser ? 'web' : 'node'
    result.isBrowser = isBrowser
  }
  
  return result
}))
