/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */

(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'libs:': 'libs/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'libs:@angular/core/bundles/core.umd.js',
      '@angular/common': 'libs:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'libs:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'libs:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'libs:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'libs:@angular/http/bundles/http.umd.js',
      '@angular/router': 'libs:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'libs:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'libs:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'libs:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'libs:@angular/upgrade/bundles/upgrade-static.umd.js',

      // other libraries
      'rxjs':                      'libs:rxjs',
      'angular-in-memory-web-api': 'libs:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
