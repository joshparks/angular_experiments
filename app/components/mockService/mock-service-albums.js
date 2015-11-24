(function() {

  'use-strict';

  angular.module('experiments.mockService.albums', [])

  .factory('MockAlbums', ['$resource', function($resource) {

    var url = "http://jsonplaceholder.typicode.com/albums";

    return $resource(url, {});

  }])

})();
