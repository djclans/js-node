(function() {
  'use strict';

  angular
    .module('jsNode')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
