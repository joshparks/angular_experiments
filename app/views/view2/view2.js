(function() {

  'use strict';

  angular.module('experiments.views.view2', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'views/view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', ['$scope', function($scope) {

    $scope.test = "View 2 Success";

  }]);

})();
