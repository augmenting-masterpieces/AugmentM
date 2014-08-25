(function(){
  'use strict';

  angular.module('cth').controller('HomeCtrl', [ProcessCtrl]);

  function HomeCtrl(){
    var vm = this;

    $.stellar();

    return vm;
  }

  

})();