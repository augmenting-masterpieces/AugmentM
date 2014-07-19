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

        $timeout(function(){
          selectItem();
          scope.$watch(selectItem);
        }, 500);

        function selectItem(){
          isActive = element.hasClass('active');
          if(isActive && done){
            scrollToPost();
            $rootScope.$broadcast('itemSelected');
          }
        }

        function scrollToPost(){
          done = false;
          var top = $(element[0]).position().top;
          $('body').animate({scrollTop: top}, {
            duration: 750,
            complete: function(){
              done = true;
            }
          });
        }
      }
    }; 
  }
})();
