(function() {

  'use strict';

  angular.module('experiments.views.albums', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/albums', {
      templateUrl: 'views/albums/albums.html',
      controller: 'AlbumsCtrl'
    });
  }])

  .controller('AlbumsCtrl', ['$scope', function($scope) {

  }]);

})();
