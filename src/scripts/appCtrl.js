(function(){
  'use strict';
  angular.module('cth').controller('AppCtrl', ['$state', '$timeout', AppCtrl]);

  function AppCtrl($state, $timeout){
    var vm = this;
    
    vm.showHeader = true;

    // $timeout(function(){
    //   vm.showHeader = false;
    // }, 500);
    
    
    vm.postOrder = '-posted';
    vm.postFilter = '';

    vm.tags = [{
      name: 'Case Study',
      filter: 'caseStudy',
      active: true
    }, {
      name: 'Process', 
      filter: 'process'
    }, {
      name: 'Prototype',
      filter: 'prototype'
    }];

    vm.setFilter = function(filter){

      vm.postFilter = filter;
      _.each(vm.tags, function(tag){
        tag.active = false;
        if(tag.filter === filter){
          tag.active = true;
          $state.go(tag.filter);
        }
        return tag;
      });
    };

    return vm;
  }

})();
