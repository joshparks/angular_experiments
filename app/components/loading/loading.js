(function() {

  'use strict';

  angular.module('experiments.loading', [
    'experiments.loading.service',
    'experiments.loading.directive'
  ])

  .value('version', '0.1');

})();
