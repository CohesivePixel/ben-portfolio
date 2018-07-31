let mix = require('laravel-mix');
let path = require('path');

if (process.env.npm_lifecycle_event !== 'hot') {
  mix.version()
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .webpackConfig({
    resolve: {
      alias: {
        'src': path.resolve(__dirname, 'resources/assets/js'),
        'components': path.resolve(__dirname, 'resources/assets/js/components'),
        'assets': path.resolve(__dirname, 'resources/assets')
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public')
    }
   })
