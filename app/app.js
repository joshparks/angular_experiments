'use strict';

// Declare app level module which depends on views, and components
angular.module('experiments', [
  'ngRoute',
  'experiments.views.home',
  'experiments.view1',
  'experiments.view2',
  'experiments.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
