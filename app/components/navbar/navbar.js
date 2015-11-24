'use strict';

angular.module('experiments.navbar', [
  'experiments.navbar.navbar-directive'
])

.controller('NavBarCtrl', ['$scope', function($scope) {

  $scope.tabs = [
    { title:'Home', href: '#/home' },
    { title:'View 1', href: '#/view1'},
    { title:'View 2', href: '#/view2'}
  ];

  $scope.changeHash = function(data) {
    window.location.hash = data;
  };

}]);
