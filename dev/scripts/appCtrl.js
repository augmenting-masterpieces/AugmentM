(function(){
  'use strict';
  angular.module('cth').controller('AppCtrl', ['$state', AppCtrl]);

  function AppCtrl($state){
    var vm = this;
    vm.navbarOpen = false;
    
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
    vm.toggleNavDrawer = function(){
      vm.navbarOpen = !vm.navbarOpen;
    };
    return vm;
  }
})();
