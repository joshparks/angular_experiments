(function() {

  'use-strict';

  angular.module('experiments.mockService.comments', [])

  .factory('MockComments', ['$resource', function($resource) {

    var url = "http://jsonplaceholder.typicode.com/comments";

    return $resource(url, {});

  }])

})();
