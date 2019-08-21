'use strict';

angular
  .module('infernoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider, $routeParams) {
    $routeProvider
       .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/inferno/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/inferno/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/inferno/tx', {
        templateUrl: 'views/tx.html',
        controller: 'TxCtrl',
        controllerAs: 'tx'
      })
      .when('/tx', {
        templateUrl: 'views/tx.html',
        controller: 'TxCtrl',
        controllerAs: 'tx'
      })

      .when('/inferno/rx', {
        templateUrl: 'views/rx.html',
        controller: 'RxCtrl',
        controllerAs: 'rx'
      })
      .when('/rx', {
        templateUrl: 'views/rx.html',
        controller: 'RxCtrl',
        controllerAs: 'rx'
      })
      .otherwise({
        redirectTo: '/'
      });
     // $locationProvider.html5Mode(true);

  }]);
