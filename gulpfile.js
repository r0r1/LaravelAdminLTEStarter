var elixir = require('laravel-elixir');

var paths = {
  'bootstrap' : './vendor/bower_components/bootstrap-sass/assets/',
  'fontawesome': './vendor/bower_components/font-awesome/',
  'adminlte': './vendor/bower_components/AdminLTE/',
  'ionicons': './vendor/bower_components/Ionicons/'
}

elixir(function(mix) {
  mix
    .sass('app.scss', 'public/css/vendor.css', {includePaths: 
        [
          paths.bootstrap + 'stylesheets', 
          paths.fontawesome + 'scss',
          paths.ionicons + 'scss'
        ]
    })
    .copy(paths.fontawesome + 'fonts/**', 'public/fonts')
    .copy(paths.ionicons + 'fonts/**', 'public/fonts')
    .copy(paths.adminlte + 'bootstrap/fonts/**', 'public/fonts')
    .copy(paths.adminlte + 'dist/img/**', 'public/img')
    .copy(paths.adminlte + 'plugins/**', 'public/plugins')
    .styles([     
      paths.adminlte + 'dist/css/AdminLTE.min.css',
      paths.adminlte + 'dist/css/skins/_all-skins.css'
    ], 'public/css/adminlte.css')
    .scripts([
      paths.adminlte + 'plugins/jQuery/jQuery-2.1.4.min.js',
      paths.adminlte + 'plugins/jQueryUI/jquery-ui.min.js',
      paths.adminlte + 'bootstrap/js/bootstrap.min.js',
      paths.adminlte + 'dist/js/app.min.js'
    ], 'public/js/app.js')
    .version([
      'css/vendor.css', 
      'css/adminlte.css',
      'js/app.js'
    ]);
});