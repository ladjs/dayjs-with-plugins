# dayjs-with-plugins

[![build status](https://img.shields.io/travis/com/niftylettuce/dayjs-with-plugins.svg)](https://travis-ci.com/niftylettuce/dayjs-with-plugins)
[![code coverage](https://img.shields.io/codecov/c/github/niftylettuce/dayjs-with-plugins.svg)](https://codecov.io/gh/niftylettuce/dayjs-with-plugins)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/niftylettuce/dayjs-with-plugins.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/dayjs-with-plugins.svg)](https://npm.im/dayjs-with-plugins)

> Day.js with all plugins added out of the box, no need to use dayjs.extend!


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [Node](#node)
  * [Browser](#browser)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install dayjs dayjs-with-plugins
```

[yarn][]:

```sh
yarn add dayjs dayjs-with-plugins
```


## Usage

### Node

```js
const dayjs = require('dayjs-with-plugins');

console.log('M/D/YY', dayjs().format('M/D/YY'));
```

### Browser

#### VanillaJS

This is the solution for you if you're just using `<script>` tags everywhere!

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,Array.from,Symbol,console"></script>
<script src="https://unpkg.com/dayjs-with-plugins"></script>
<script type="text/javascript">
  (function() {
    console.log('M/D/YY', dayjs().format('M/D/YY'));
  })();
</script>
```

##### Required Browser Features

We recommend using <https://polyfill.io> (specifically with the bundle mentioned in [VanillaJS](#vanillajs) above):

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,Array.from,Symbol,console"></script>
```

* Array.from() is not supported in IE 11
* Symbol.iterator() is not supported in IE 11
* Symbol.prototype() is not supported in IE 11
* Symbol is not supported in IE 11
* console.table() is not supported in IE 11

#### Bundler

This assumes you are using [browserify][], [webpack][], [rollup][], or another bundler.

See [Node](#node) usage above for how to use in a bundler environment.


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[browserify]: https://github.com/browserify/browserify

[webpack]: https://github.com/webpack/webpack

[rollup]: https://github.com/rollup/rollup
