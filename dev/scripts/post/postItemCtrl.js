(function(){
  'use strict';

  angular.module('cth').controller('PostItemCtrl', ['$scope', PostItemCtrl]);

  function PostItemCtrl($scope){
    var vm = this;

    vm.post = $scope.post;
    vm.post.id = dasherize(vm.post.title);
    vm.post.headerImage = vm.post.images[0];
    $scope.toggleExpanded = function(){
      vm.post.expanded = !vm.post.expanded;
    };

    return vm;
  }

  function dasherize(str){
    return str.replace(/\s+/g, '-').toLowerCase(); 
  }
})();
