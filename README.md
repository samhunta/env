# actress-env

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]

Check features of the current environment. You can have a `window`
in your Node, Webpack, React Native, or Cordova environment, but
it doesn't necessarily mean it's a browser. This is where this
package comes in. Distinguish target and features of
your current environment!


## Installation
```
npm i -S actress-env
```

## Usage

Include the library:

```javascript
    // CommonJS
    const actressEnv = require('actress-env')
    
    // or AMD
    define(['actress-env'], (actressEnv) => {
        // ...
    })

    // or accessible via script tag on `window.__actressEnv__`
    // <script src="actress-env.js"></script>
```

## Examples

If you're in a webpack or browserify like environment, you may receive
an object similar to this:

```javascript
console.log(require('actress-env'))
{
  "target": "browser",
  "isBrowser": true,
  "isBundler": true,
  "isReactNative": false,
  "isNode": false,
  "hasRequire": true,
  "hasWindow": true,
  "hasProcess": true,
  "hasGlobal": true
}
```

[npm-image]: https://img.shields.io/npm/v/actress-env.svg
[npm-url]: https://npmjs.org/package/actress-env
[downloads-image]: https://img.shields.io/npm/dm/actress-env.svg
[downloads-url]: https://npmjs.org/package/actress-env