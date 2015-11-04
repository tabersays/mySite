/**
 * Created by TaberStorm on 7/17/2015.
 */


var mySliders = angular.module('bossy.slider');

var myApp = angular.module('myApp', ['ngRoute', 'bossy.slider']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/about.html',
            controller: 'mainController'
        })
        .when('/calendar', {
            templateUrl: 'templates/calendar.html',
            controller: 'calendarController'
        })
        .when('/crypTrd', {
            templateUrl: 'templates/crypTrd.html',
            controller: 'crypTrdController'
        })
        .when('/gameMaster', {
            templateUrl: 'templates/gameMaster.html',
            controller: 'gameMasterController'
        })
        .when('/projects', {
            templateUrl: 'templates/projects.html',
            controller: 'projectsController'
        })
        .when('/resume', {
            templateUrl: 'templates/resume.html',
            controller: 'resumeController'
        })
        .when('/tabersRolePlay', {
            templateUrl: 'templates/tabersRolePlay.html',
            controller: 'tabersRolePlayController'
        })
        .when('/angularTest', {
            templateUrl: 'templates/slider.html',
            controller: 'angularTestController'
        })
        .when('/trpHeroes', {
            templateUrl: 'templates/trpHeroes.html',
            controller: 'trpHeroesController'
        })
});

//main controller
myApp.controller('mainController', function ($scope) {

});

myApp.controller('calendarController', function ($scope) {

});

myApp.controller('crypTrdController', function ($scope) {

});

myApp.controller('gameMasterController', function ($scope) {

});

myApp.controller('projectsController', function ($scope) {

});

myApp.controller('resumeController', function ($scope) {

});

myApp.controller('tabersRolePlayController', function ($scope) {

});

myApp.controller('angularTestController', function ($scope) {

});
