'use strict';

angular.module('experiments.navbar', [
  'experiments.navbar.navbar-directive'
])

.controller('NavBarCtrl', ['$scope', function($scope) {

  $scope.tabs = [
    { title:'Home Title', content:'Home Content', url: '#/home' },
    { title:'View1 Title', content:'View 1 Content', url: '#/view1'},
    { title:'View2 Title', content:'View 2 Content', url: '#/view2'}
  ];

}]);
