define(['./app'], function (app) {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        /*
        * Might be an issue with relative urls in IE9
        * see here: https://docs.angularjs.org/error/$location/nobase
        ********************************************/
        $locationProvider.html5Mode({
            enabled: false
        });

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('/', {
                url: '/',
                templateUrl: './views/dashboard.html',
                controller: 'MainController'
            });
    }]);
});