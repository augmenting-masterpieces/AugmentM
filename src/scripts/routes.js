(function(){
  'use strict';

  angular.module('cth').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);


    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'post/postList.html',
        controller: 'PostCtrl as postList',
        resolve: {
          posts: ['$http', function($http){
            return $http.get('/api/posts.json').then(function(response){
              var posts = response.data.posts;
              posts = _(posts).sortBy('posted').value().reverse();
              return posts;
            }); 
          }]
        }
      })
      .state('posts.post', {
        url: '/:post_id',
      })
      .state('about', {
        url: '/pilot',
        templateUrl: 'templates/pilot.html',
        controller: 'PilotCtrl as pilot'

      });

    $urlRouterProvider.when('/', '/posts');
  }


})();
