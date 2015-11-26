(function() {

  'use strict';

  angular.module('experiments.views.photos', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/photos', {
      templateUrl: 'views/photos/photos.html',
      controller: 'PhotosCtrl'
    });
  }])

  .controller('PhotosCtrl', ['$scope', '$filter', 'ngTableParams', 'MockPhotos', function($scope, $filter, ngTableParams, MockPhotos) {

    MockPhotos.query(function(data) {
      setupTable(data);
    });

    var setupTable = function (data) {
      $scope.photosTable = new ngTableParams({
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
