(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['postDataService', '$http', PostCtrl]);

  function PostCtrl(postDataService, $http){

    var vm = this;

    vm.posts = postDataService.getPosts();

    $http.get('api/posts.json').success(function(response){
      vm.posts = response.posts;
    });
    
    return vm;
  }


})();
