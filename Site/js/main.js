require.config({
    waitSeconds: 1,
    // plugins and path that getting used in the application
    paths: {
        'domReady': 'vendors/requirejs/domReady',
        'angular': 'vendors/angularjs/angular',
        'underscore': 'vendors/underscore/undescore',
        'materialize': 'vendors/materialize/materialize',
        'hammerjs': 'vendors/materialize/hammerjs',
        'uiRoute': './vendors/angularjs/ui-router/angular-ui-router',
        'ngResource': '/vendors/angularjs/angular-resource',
        'ngCookies': '/vendors/angularjs/angular-cookies',
        'raphael': './vendors/raphael/raphael',
        'raphaelsketchpad': './vendors/raphael/raphael.sketchpad',
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min', 'vendors/jquery/jquery'],
        'JSON2': ['//cdnjs.cloudflare.com/ajax/libs/json2/20140204/json2.min'],
        'eve': './vendors/raphael/eve',
        'menu': ['./vendors/context-menu/contextMenu'],
        'bootstrap': ['//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js']
    },

    // angular doesn't support AMD out of the box so create a temp variable in global namespace...
    shim: {
        ngResource: {
            deps: ['angular'],
            exports: 'ngResource'
        },

        uiRoute: {
            deps: ['angular'],
            exports: 'uiRoute'
        },

        ngCookies: {
            deps: ['angular'],
            exports: 'ngCookies'
        },

        jquery: {
            exports: 'jquery'
        },

        underscore: {
            exports: '_'
        },

        raphael: {
            exports: 'raphael'
        },

        raphaelsketchpad: {
            exports: 'raphaelsketchpad',
            deps: ['raphael', 'jquery', 'JSON2', 'eve']
        },

        angular: {
            exports: 'angular'
        },

        bootstrap: {
            exports: 'bootstrap',
            deps: ['jquery']
        }
    },
    dev: {
        options: {
            optimize: 'none'
        }
    },
    release: {
        options: {
            optimize: 'uglify'
        }
    },
    baseUrl: 'js',

    // startup the application
    deps: ['bootstrap-app']
});
