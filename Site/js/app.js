define([
     'angular',
     'uiRoute',
     './controllers/index',
     './directives/index',
     './models/line',
     './models/polygon',
     './models/draggable',
     'menu'
], function (ng) {
    'use strict';
    return ng.module('app', ['app.controllers', 'app.directives', 'ui.router']);
});