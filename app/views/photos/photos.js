(function() {

  'use strict';

  angular.module('experiments.views.photos', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/photos', {
      templateUrl: 'views/photos/photos.html',
      controller: 'PhotosCtrl'
    });
  }])

  .controller('PhotosCtrl', ['$scope', function($scope) {


  }]);

})();
