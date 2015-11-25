(function() {

  'use strict';

  angular.module('experiments.views.posts', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/posts', {
      templateUrl: 'views/posts/posts.html',
      controller: 'PostsCtrl'
    });
  }])

  .controller('PostsCtrl', ['$scope', '$filter', 'ngTableParams', 'MockPosts', function($scope, $filter, ngTableParams, MockPosts) {

    MockPosts.query(function(data) {
      setupTable(data);
    });

    var setupTable = function (data) {
      $scope.postsTable = new ngTableParams({
        page: 1,
        count: 10
      }, {
        total: data.length,

        getData: function ($defer, params) {
          $scope.data = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
          $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
          $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
          $defer.resolve($scope.data);
        }
      });
    }

  }]);

})();
