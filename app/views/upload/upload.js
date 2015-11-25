(function() {

  'use strict';

  angular.module('experiments.views.upload', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/upload', {
      templateUrl: 'views/upload/upload.html',
      controller: 'UploadCtrl'
    });
  }])

  .controller('UploadCtrl', ['$scope', '$timeout', 'MockUpload', function($scope, $timeout, MockUpload) {

    $scope.uploadFiles = function(file, errFiles) {

      $scope.f = file;

      $scope.errFile = errFiles && errFiles[0];

      if (file) {

        file.upload = MockUpload.upload({
          url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
          data: {file: file}
        });

        file.upload.then(
          function (response) {
            $timeout(function () {
              file.result = response.data;
            });
          },
          function (response) {
            if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
          },
          function (evt) {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          }
        );

      }

    }

  }]);

})();
