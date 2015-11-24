(function() {

  'use strict';

  angular.module('experiments.navbar', [
    'experiments.navbar.navbar-directive'
  ])

  .controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.tabs = [
      { title:'Home', href: '#/home' },
      { title:'View 1', href: '#/view1'},
      { title:'View 2', href: '#/view2'}
    ];

    $scope.changeHash = function (data) {
      window.location.hash = data;
    };

    $scope.navigate = function (pageName) {
      window.location.hash = '/#/' + pageName;
    }

    $scope.isActive = function (pageName) {
      return pageName === $location.path();
    }

  }]);

})();
