'use strict';

module.exports = {
  browserSync: {
    server: 'build',
    port:   8000,
    notify: false,
    open:   false
  },
  // SCSS
  scss: {
    compatability: ['last 2 versions', 'ie >= 9'],
    paths:         {
      src: [
        'node_modules/foundation-sites/scss',
        'node_modules/motion-ui/src',
        'src/assets/scss/components'
      ],
      build: 'build/assets/css',
      dist:  'app/assets/css'
    }
  },
  icons: {
    paths: {
      src:   'src/assets/foundation-icons/**/*',
      build: 'build/assets/foundation-icons',
      dist:  'dist/assets/foundation-icons'
    }
  },
  // JavaScript
  js: {
    // AngularJS
    angular: {
      src: [
        // 'node_modules/angular/angular.min.js',
        'src/app/**/*',
        '!src/app/scripts{,/**}'
      ],
      scripts: [
        'node_modules/angular/angular.js',
        'src/app/scripts/app.js',
        'src/app/scripts/controllers/*.js',
        'src/app/scripts/directives/*.js',
        'src/app/scripts/services/*.js',
        'src/app/scripts/ui-components/*.js'
      ],
      build: 'build',
      dist:  'app'
    }
  }
};
