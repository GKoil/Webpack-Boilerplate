# Webpack Boilerplate

[![Dependency Status](https://david-dm.org/GKoil/frontend-project-lvl2.svg)](https://david-dm.org/GKoil/Webpack-Boilerplate)
[![devDependency Status](https://david-dm.org/GKoil/frontend-project-lvl2/dev-status.svg)](https://david-dm.org/GKoil/Webpack-Boilerplate?type=dev)


* [About](#About)
* [Install](#Install)
* [Usage](#Usage)
  * [Development mode](#Development)
  * [Production mode](#Production)
* [Dependencies](#Dependencies)
  * [Webpack](#Webpack)
  * [Babel](#Babel)
  * [Loaders](#Loaders)
  * [Plugins](#Plugins)
  * [Linter](#Linter)
* [Author](#Author)

## About
**Light version**
</br>
This is the starting webpack template.


## Install
Install dependencies
```
npm i
```

## Usage

### Development
```
make start
```
or
```
npm run start
```

### Production
```
make build
```
or
```
npm run build
```

## Dependencies
### Webpack
- [`webpack`](https://github.com/webpack/webpack) - A module bundler
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - The official CLI of webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Server for the development mode
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Configurate development mode and production mode

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Babel
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms
- [`core-js`](https://github.com/zloirock/core-js) - Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2021

### Loaders
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`postcss-loader`](https://github.com/webpack-contrib/postcss-loader/) - Loader to process CSS with PostCSS
  - [`postcss`](https://github.com/postcss/postcss/) - PostCSS is a tool for transforming styles with JS plugins
  - [`postcss-preset-env`](https://github.com/jonathantneal/postcss-preset-env) - allows you to use future CSS features today.
  - [`autoprefixer`](https://github.com/postcss/autoprefixer) - adds vendor prefixes, using data from Can I Use.
### Plugins
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Clean the build folder
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - The plugin will generate an HTML5 file from a template
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files from src to build directory
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files in build mode

### Linter
- [`eslint`](https://github.com/eslint/eslint) - Eslint
- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Config from airbnb

## Author
- [Kirill Grigorev](https://github.com/GKoil)