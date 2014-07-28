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
          console.log("helk");
          var top = $($element[0]).position().top + 100;
          console.log(top);
          $('body').animate({scrollTop: top}, {
            duration: 750,
          });
        }
      }
    }; 
  }
})();
