(function() {

  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('experiments', [
    'ngRoute',
    'ngResource',
    'ngTable',
    'ngFileUpload',
    'ui.bootstrap',
    'experiments.views.home',
    'experiments.view1',
    'experiments.view2',
    'experiments.version',
    'experiments.navbar',
    'experiments.footer',
    'experiments.mockService',
    'experiments.views.posts',
    'experiments.views.upload'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

})();
