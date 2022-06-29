# dayjs-with-plugins

[![build status](https://img.shields.io/travis/com/niftylettuce/dayjs-with-plugins.svg)](https://travis-ci.com/niftylettuce/dayjs-with-plugins)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/niftylettuce/dayjs-with-plugins.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/dayjs-with-plugins.svg)](https://npm.im/dayjs-with-plugins)

> Day.js with all plugins and locales added out of the box, no need to use `dayjs.extend` nor `dayjs.locale`!


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [Node](#node)
  * [Browser](#browser)
  * [Debugging](#debugging)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install dayjs dayjs-with-plugins
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
<script src="https://polyfill.io/v3/polyfill.min.js?features=Promise"></script>
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
<script src="https://polyfill.io/v3/polyfill.min.js?features=Promise"></script>
```

* Promise is not supported in op\_mini all

#### Bundler

This assumes you are using [browserify][], [webpack][], [rollup][], or another bundler.

See [Node](#node) usage above for how to use in a bundler environment.

### Debugging

You can use `NODE_DEBUG=dayjs-with-plugins node app.js` to debug output from this package.


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


##

[npm]: https://www.npmjs.com/

[browserify]: https://github.com/browserify/browserify

[webpack]: https://github.com/webpack/webpack

[rollup]: https://github.com/rollup/rollup
