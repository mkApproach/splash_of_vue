const mix = require('laravel-mix');

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

 /* 2022.03.19
mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
*/

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/router.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .version();

// mix.browserSync({
//    files: [
//      "resources/views/**/*.blade.php",
//      "public/**/*.*"
//    ],
//    proxy: 'http://127.0.0.1:8000'
// });

