'use strict';

angular.module('experiments.version', [
  'experiments.version.interpolate-filter',
  'experiments.version.version-directive'
])

.value('version', '0.1');
