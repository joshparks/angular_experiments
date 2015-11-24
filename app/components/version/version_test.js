(function() {

  'use strict';

  describe('experiments.version module', function() {
    beforeEach(module('experiments.version'));

    describe('version service', function() {
      it('should return current version', inject(function(version) {
        expect(version).toEqual('0.1');
      }));
    });
  });

})();
