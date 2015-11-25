(function() {

  'use strict';

  angular.module('experiments.views.comments', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/comments', {
      templateUrl: 'views/posts/comments.html',
      controller: 'CommentsCtrl'
    });
  }])

  .controller('CommentsCtrl', ['$scope', function($scope) {

  }]);

})();
