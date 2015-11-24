(function() {

  'use strict';

  angular.module('experiments.mockService', [
    'experiments.mockService.albums',
    'experiments.mockService.comments',
    'experiments.mockService.photos',
    'experiments.mockService.posts',
    'experiments.mockService.todos',
    'experiments.mockService.users'
  ])

  .value('version', '0.1');

})();
