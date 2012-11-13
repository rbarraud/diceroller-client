'use strict';

// Declare app level module which depends on filters, and services
var clientApp = angular.module('clientApp', ['ui'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/choose', {
        templateUrl: 'views/choose.html',
        controller: 'chooseController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
