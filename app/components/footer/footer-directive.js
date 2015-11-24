(function() {

  'use strict';

  angular.module('experiments.footer.footer-directive', [])

  .directive('footer', [ function() {

    return {

      restrict: 'E',
      templateUrl: 'components/footer/footer.html',
      controller: 'FooterCtrl',
      link: function(scope, elem, attrs) {

      }

    };

  }]);

})();
