(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['postDataService', '$http', PostCtrl]);

  function PostCtrl(postDataService, $http){

    var vm = this;

    var postPromise = postDataService.getPosts();

    postPromise.then(function(data){
      vm.posts = data;
    });
    
    return vm;
  }


})();
