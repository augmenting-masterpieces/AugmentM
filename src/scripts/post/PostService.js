(function(){
  'use strict';

   angular.module('cth').factory('PostService', ['$http', '$q', PostService]); 

  function PostService($http, $q){
    
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
