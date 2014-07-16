(function(){
  'use strict';

   angular.module('cth').factory('Post', ['$http', '$q', Post]); 

  function Post($http, $q){
    
    function getAll(){
      var deferred = $q.defer();

      $http.get('/api/posts.json').then(function(response){
        return deferred.resolve(response.data.posts);
      }); 

      return deferred.promise;
    }

    return {
      getAll: getAll
    };
  }
})();
