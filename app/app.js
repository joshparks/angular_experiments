(function() {

  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('experiments', [
    'ngRoute',
    'ngResource',
    'ngTable',
    'ngFileUpload',
    'ui.bootstrap',
    'experiments.version',
    'experiments.navbar',
    'experiments.footer',
    'experiments.mockService',
    'experiments.views',
    'experiments.loading'
  ])

  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
    $httpProvider.interceptors.push('LoadingInterceptor');
  }]);

})();
