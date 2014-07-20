(function(){
  'use strict';
  angular.module('cth').directive('postItem', [postItem]);
      
  function postItem() {
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: 'post/postItem.html',
      controller: 'PostItemCtrl',
      replace: true
    };
  }
})();
