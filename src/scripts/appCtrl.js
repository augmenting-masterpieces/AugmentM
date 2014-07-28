(function(){
  'use strict';
  angular.module('cth').controller('AppCtrl', ['$state', '$timeout', AppCtrl]);

  function AppCtrl($state, $timeout){
    var vm = this;
    vm.showHeader = true;

    $timeout(function(){
      vm.showHeader = false;
    }, 2000);
    
    
    vm.postOrder = '-posted';
    vm.postFilter = '';

    vm.tags = [{
      name: 'About',
      filter: 'about'
    }, {
      name: 'Posts', 
      filter: 'post',
      active: true
    }, {
      name: 'Articles',
      filter: 'article'
    }, {
      name: 'All',
      filter: ''
    }];

    vm.setFilter = function(filter){
      vm.postFilter = filter;
      _.each(vm.tags, function(tag){
        tag.active = false;
        if(tag.filter === filter){
          tag.active = true;
        }
        return tag;
      });
      $state.go('posts');

    };

    return vm;
  }
})();
