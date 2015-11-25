(function() {

  'use strict';

  angular.module('experiments.views.users', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users', {
      templateUrl: 'views/users/users.html',
      controller: 'UsersCtrl'
    });
  }])

  .controller('UsersCtrl', ['$scope', function($scope) {

  }]);

})();
