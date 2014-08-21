(function(){
  'use strict';

  angular.module('cth').controller('HomeCtrl', [ProcessCtrl]);

  function ProcessCtrl(){
    var vm = this;

    $.stellar();

    return vm;
  }

  

})();