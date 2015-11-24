(function() {

  'use-strict';

  angular.module('experiments.mockService.photos', [])

  .factory('MockPhotos', ['$resource', function($resource) {

    var url = "http://jsonplaceholder.typicode.com/photos";

    return $resource(url, {});

  }])

})();
