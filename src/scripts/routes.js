(function(){
  'use strict';

  angular.module('augm').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('case-study', {
        url: '/case-study',
        templateUrl: 'templates/case-study.html',
        controller: 'CaseStudyCtrl as case'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl as home'
      })
      .state('prototype', {
        url: '/prototype',
        templateUrl: 'templates/prototype.html',
        controller: 'PrototypeCtrl as proto'
      })
      .state('homepage', {
        url: '/homepage',
        templateUrl: 'templates/homepage.html',
        controller: 'HomepageCtrl as homep'
      });

    $urlRouterProvider.when('/', '/homepage');
  }

// .state('posts', {
//   url: '/posts',
//   templateUrl: 'post/postList.html',
//   controller: 'PostCtrl as postList',
//   resolve: {
//     posts: ['$http', function($http){
//       return $http.get('/api/posts.json').then(function(response){
//         var posts = response.data.posts;
//         posts = _(posts).sortBy('posted').value().reverse();
//         return posts;
//       }); 
//     }]
//   }
// })
// .state('posts.post', {
//   url: '/:post_id',
// })


})();
