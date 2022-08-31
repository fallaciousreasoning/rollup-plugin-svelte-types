# rollup-plugin-svelte-types

🍣 A Rollup plugin which generates type definitions for Svelte Components, including Props and Events.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```console
npm install rollup-plugin-svelte-types --save-dev
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import svelteDts from 'rollup-plugin-svelte-types';

export default {
  input: 'src/entry.js',
  // ...
  plugins: [
    svelteDts()
  ]
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

## Options

It's possible to use configure a few settings:

```js
import svelteDts from 'rollup-plugin-svelte-types';

export default {
  input: 'src/entry.js',
  // ...
  plugins: [
    svelteDts({
        libRoot: './src', // The root directory to generate the type definitions for. Defaults to './'
        declarationDir: './dist/types' // The directory to place the generated definitions in. Defaults to './types'
    })
  ]
};
```

## License

[MIT](LICENSE)
