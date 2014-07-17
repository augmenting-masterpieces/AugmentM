(function(){
  'use strict';

  angular.module('cth').directive('scrollIntoView', ['$', scrollIntoView]);

  function scrollIntoView($){
    return {
      restrict: 'EA',
      replace: false,
      link: function(scope, element, attrs){
        scope.$watch(scrollToPost);

        function scrollToPost(){
          var isActive = element.hasClass('active');
          if(isActive){
            setTimeout(function(){
              $(element[0]).scrollIntoView();
            }, 300);
          }
        }
      }
    }; 
  }
})();
