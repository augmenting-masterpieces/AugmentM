(function(){
  'use strict';

  angular.module('cth').controller('HomeCtrl', [HomeCtrl]);

  function HomeCtrl(){
    var vm = this;

    $.stellar();

    return vm;
  }

  

})();