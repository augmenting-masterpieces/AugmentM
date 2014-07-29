(function(){
  'use strict';

  angular.module('cth').controller('PostItemCtrl', ['$scope', '$element', 'stringManipulators', 'scroll', PostItemCtrl]);

  function PostItemCtrl($scope, $element, stringManipulators, scroll){
    var vm = this;

    vm.post = $scope.post;
    vm.post.id = stringManipulators.dasherize(vm.post.title);
    vm.post.headerImage = vm.post.images[0];

    if(vm.post.selected){
      scroll.toTop($element);
    }


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

  angular.module('cth').factory('scroll', [scroll]);

  function scroll(element){
    return {
      toTop: function(){
        console.log(element);
      }
    };
  }


  

})();
