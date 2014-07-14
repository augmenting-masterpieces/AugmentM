(function(){
  'use strict';

   angular.module('cth').factory('postDataService', ['$http', postDataService]); 

  function postDataService(){
    var posts = [1,2,3];

    function getPosts(){
      return posts;
    }

    return {
      getPosts: getPosts
    };
  }
})();
