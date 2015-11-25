(function() {

  'use-strict';

  angular.module('experiments.mockService.upload', [])

  .factory('MockUpload', ['$resource', function($resource) {

    var upload = function () {
      return true;
    }

    return {
      upload: upload
    }

    // var url = "http://jsonplaceholder.typicode.com/albums";
    //
    // return $resource(url, {
    //   url: url,
    //   data:
    // });

  }])

})();
