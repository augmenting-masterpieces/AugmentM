(function(){
  'use strict';

  angular.module('cth').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);


    $stateProvider
      .state('caseStudy', {
        url: '/caseStudy',
        templateUrl: 'caseStudy/caseStudy.html',
        controller: 'CaseStudyCtrl as case'
      })
      .state('process', {
        url: '/process',
        templateUrl: 'process/process.html',
        controller: 'ProcessCtrl as proc'
      })
      .state('prototype', {
        url: '/prototype',
        templateUrl: 'prototype/prototype.html',
        controller: 'PrototypeCtrl as proto'
      });

    $urlRouterProvider.when('/', '/caseStudy');
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
