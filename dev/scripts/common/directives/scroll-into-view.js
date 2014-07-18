(function(){
  'use strict';

  angular.module('cth').directive('scrollIntoView', ['$', '$timeout', '$rootScope', scrollIntoView]);

  function scrollIntoView($, $timeout, $rootScope){
    return {
      restrict: 'EA',
      replace: false,
      link: function(scope, element, attrs){
        var isActive;
        var done = true;
        var top;

        $timeout(function(){
          top = $(element[0]).position().top + 20;
        }, 100);

        $timeout(function(){
          selectItem();
          scope.$watch(selectItem);
        }, 500);

        function selectItem(){
          isActive = element.hasClass('active');
          if(isActive && done){
            $rootScope.$broadcast('itemSelected');
            $timeout(scrollToPost, 250);
          }
        }

        function scrollToPost(){
          isActive = element.hasClass('active');

          if(isActive && done){
            done = false;
            $('body').animate({scrollTop: top}, {
              duration: 750,
              complete: function(){
                done = true;
              }
            });
          }
        }
      }
    }; 
  }
})();
