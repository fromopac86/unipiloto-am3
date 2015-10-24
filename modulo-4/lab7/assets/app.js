angular.module('lab7', ['ngRoute', 'lab7.controllers', 'lab7.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/data', {
            controller: 'lab7Controller',
            templateUrl: 'views/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});