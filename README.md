iconutil
===

![](https://img.shields.io/npm/dm/iconutil.svg)
![](https://img.shields.io/npm/v/iconutil.svg)
![](https://img.shields.io/npm/l/iconutil.svg)

Convert between PNG/Iconsets and .ICNS files with Node.JS

Installation
===

**Requires OSX and Xcode.**

```bash
npm install iconutil
```

Usage
===

###*Convert an ICNS file to an Iconset*
```js
var iconutil = require('iconutil');

var path = '/Applications/Messages.app/Contents/Resources/Messages.icns';

iconutil.toIconset(path, function(err, icons) {
    // icons is an an object where keys are the file names
    // and the values are Buffers containing PNG files
});
```

###*Convert an Iconset to to an ICNS file*
```js
var iconutil = require('iconutil');

var path = './test.iconset';

iconutil.toICNS(path, function(err, icon) {
    // icon is a Buffer containing the ICNS file
});
```
