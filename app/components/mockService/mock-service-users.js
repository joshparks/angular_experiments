(function() {

  'use-strict';

  angular.module('experiments.mockService.users', [])

  .factory('MockUsers', ['$resource', function($resource) {

    var url = "http://jsonplaceholder.typicode.com/users";

    return $resource(url, {});

  }])

})();
