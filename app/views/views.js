(function() {

  'use strict';

  angular.module('experiments.views', [
    'experiments.views.albums',
    'experiments.views.comments',
    'experiments.views.photos',
    'experiments.views.posts',
    'experiments.views.todos',
    'experiments.views.users',
    'experiments.views.upload',
    'experiments.views.home',
    'experiments.views.view1',
    'experiments.views.view2'
  ])

  .value('version', '0.1');

})();
