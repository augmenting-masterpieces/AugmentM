(function(){
  'use strict';

  angular.module('cth').directive('scrollIntoView', ['$', scrollIntoView]);


  function scrollIntoView($){
    return {
      restrict: 'A',
      scope: {
        selected: '@'
      },
      controller: function($scope, $element){
        console.log($scope.selected);
        if($scope.selected === "selected"){
          var top = $($element[0]).position().top + 100;
          $('body').animate({scrollTop: top}, {
            duration: 750,
          });
        }
      }
    }; 
  }
})();
