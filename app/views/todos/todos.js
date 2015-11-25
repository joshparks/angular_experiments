(function() {

  'use strict';

  angular.module('experiments.views.todos', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/todos', {
      templateUrl: 'views/todos/todos.html',
      controller: 'TodosCtrl'
    });
  }])

  .controller('TodosCtrl', ['$scope', function($scope) {

  }]);

})();
