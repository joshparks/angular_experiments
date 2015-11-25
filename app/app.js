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
    'experiments.views'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

})();
