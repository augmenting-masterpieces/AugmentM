(function(){
  'use strict';

   angular.module('cth').factory('postDataService', ['$http', '$q', postDataService]); 

  function postDataService($http, $q){

    function getPosts(){
      var deferred = $q.defer(); 

      $http.get('api/posts.json').success(function(response){
        deferred.resolve(response.posts);
      });

      return deferred.promise;

    }

    return {
      getPosts: getPosts
    };
  }
})();
