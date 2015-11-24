(function() {

  'use-strict';

  angular.module('experiments.mockService.posts', [])

  .factory('MockPosts', ['$resource', function($resource) {

    var url = "http://jsonplaceholder.typicode.com/posts";

    return $resource(url, {});

  }])

})();
