(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', function($scope, $http){
    $http.get('api/posts.json').success(function(response){
      console.log(response.posts);
      $scope.posts = response.posts;
    });
  });
})();
