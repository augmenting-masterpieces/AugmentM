(function(){
  'use strict';

  angular.module('cth').directive('scrollIntoView', ['$', '$timeout', '$stateParams', '$rootScope', scrollIntoView]);


  function scrollIntoView($, $timeout, $stateParams, $rootScope){
    return {
      restrict: 'A',
      replace: false,
      link: function(scope, element, attrs){
        var isActive;
        var isTriggered;
        var done = true;
        
        $timeout(function(){
          fadeOutHeader();
        }, 1000);


        $timeout(function(){
          scope.$watch(selectItem);
        }, 3000);

        function selectItem(){
          if(isScrollable()){
            done = false;
            if(isTriggered){
              $rootScope.$broadcast('noItemSelected');
            } else {
              $rootScope.$broadcast('itemSelected');
            }
            scrollToPost();
          }
        }
        
        function isScrollable() {
          isActive = element.hasClass('active');
          isTriggered = element.hasClass('triggered') && !$stateParams.post_id;
          return (isActive || isTriggered) && done;
        }

        function fadeOutHeader(){
          $('body').addClass("done");
        }

        function scrollToPost(){
          var top = $(element[0]).position().top - $('.logo').height();
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
