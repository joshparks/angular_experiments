(function() {

  'use-strict';

  angular.module('experiments.mockService.todos', [])

  .factory('MockTodos', ['$resource', function($resource) {

    var url = "http://jsonplaceholder.typicode.com/todos";

    return $resource(url, {});

  }])

})();
