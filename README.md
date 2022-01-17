# webpack stats context config issue

When using a relative path for [`stats.context` as in the documention](https://webpack.js.org/configuration/stats/#statscontext)
```js
// webpack.config.js
module.exports = {
  // ...webpack config
  stats: {
    context: './src'
  }
};
```

the build command is failing:
```shell
$ webpack --mode production --json artifacts/webpack-stats
[webpack-cli] Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
 - configuration.stats.context: The provided value "./src" is not an absolute path!
   -> Context directory for request shortening.
error Command failed with exit code 2.
```
