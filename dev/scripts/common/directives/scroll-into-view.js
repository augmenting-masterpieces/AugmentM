(function(){
  'use strict';

  angular.module('cth').directive('scrollIntoView', ['$', '$timeout', scrollIntoView]);

  function scrollIntoView($, $timeout){
    return {
      restrict: 'EA',
      replace: false,
      link: function(scope, element, attrs){
        var isActive;
        var oldElement;
        var done = true;

        $timeout(function(){
          scrollToPost();
          scope.$watch(scrollToPost);
        }, 500);

        function scrollToPost(){
          isActive = element.hasClass('active');

          if(isActive && done){
            done = false;
            var top = $(element[0]).position().top + 20;
            $('body').animate({scrollTop: top}, {
              duration: 1000,
              complete: function(){
                done = true;
              }
            });
            oldElement = element;
          }
        }

        function differentElement(){
          return element !== oldElement;
        }
      }
    }; 
  }
})();
