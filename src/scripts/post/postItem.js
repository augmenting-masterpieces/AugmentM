(function(){
  'use strict';
  angular.module('cth').directive('postItem', ['scroll', postItem]);
      
  function postItem(scroll) {
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: 'post/postItem.html',
      controller: 'PostItemCtrl',
      replace: true,
      link: function(scope, element, attrs){
        attrs.$observe('selected', function(newValue, oldValue){
          if(newValue === "true"){
            scroll.toTop(element);
          }
        });
      }
    };
  }
})();
