(function(){
  'use strict';

  angular.module('cth').controller('PostItemCtrl', ['$scope', 'stringManipulators', PostItemCtrl]);

  function PostItemCtrl($scope, stringManipulators){
    var vm = this;

    vm.post = $scope.post;
    vm.post.id = stringManipulators.dasherize(vm.post.title);
    vm.post.headerImage = vm.post.images[0];

    $scope.toggleExpanded = function(){
      vm.post.expanded = !vm.post.expanded;
    };

    return vm;
  }

  angular.module('cth').factory('stringManipulators', [stringManipulators]);

  function stringManipulators(){
    return {
      dasherize: function(str){
        return str.replace(/\s+/g, '-').toLowerCase(); 
      }
    };
  }


  

})();
