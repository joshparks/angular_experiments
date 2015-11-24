(function() {

  'use strict';

  angular.module('experiments.navbar.navbar-directive', [])

  .directive('navBar', [ function() {

    return {

      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      controller: 'NavBarCtrl',
      link: function(scope, elem, attrs) {

      }

    };

  }]);

})();
