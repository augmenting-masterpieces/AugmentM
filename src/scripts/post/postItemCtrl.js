(function(){
  'use strict';

  angular.module('cth').controller('PostItemCtrl', ['$scope', '$element', '$timeout', 'stringManipulators', 'scroll', PostItemCtrl]);

  function PostItemCtrl($scope, $element, $timeout, stringManipulators, scroll){
    var vm = this;

    vm.post = $scope.post;
    vm.post.id = stringManipulators.dasherize(vm.post.title);
    vm.post.headerImage = vm.post.images[0];

    if(vm.post.initial){
      // $timeout(function(){
      //   scroll.toTop($element);
      // }, 4000);
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

  function scroll(){
    return {
      toTop: function(element){

        var top = element.position().top - $('.site-header .logo').height();
        //console.log(top);
        $('body').animate({scrollTop: top + 5}, {
          duration: 750,
        });
      }
    };
  }


  

})();
