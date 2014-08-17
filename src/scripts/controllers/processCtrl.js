(function(){
  'use strict';

  angular.module('cth').controller('ProcessCtrl', [ProcessCtrl]);

  function ProcessCtrl(){
    var vm = this;

    $.stellar();

    return vm;
  }

  

})();