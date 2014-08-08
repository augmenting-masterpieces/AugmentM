(function(){
  'use strict';

  angular.module('cth').controller('PilotCtrl', ['studentsData', AboutCtrl]);

  function AboutCtrl(studentsData){
    var vm = this;

    vm.students = studentsData;

    return vm;
  }
})();
