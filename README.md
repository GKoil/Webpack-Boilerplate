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

### Loaders
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
### Plugins
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Clean the build folder
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - The plugin will generate an HTML5 file from a template

### Linter

## Author
- [Kirill Grigorev](https://github.com/GKoil)