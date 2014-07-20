(function(){
  'use strict';

  var app = angular.module('cth', ['ngSanitize', 'templates-cth', 'ngAnimate', 'firebase', 'ui.router']);

  app.constant('Showdown', Showdown);
  app.constant('$', jQuery);
  app.constant('_', _);

  app.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'post/postList.html',
        controller: 'PostCtrl as postList',
      })
      .state('posts.post', {
        url: '/:post_id'
      })
      .state('about', {
        url: '/pilot',
        templateUrl: 'templates/pilot.html',
        controller: 'PilotCtrl as pilot'

      });

    $urlRouterProvider.when('', '/posts');
  });

  app.factory('studentsData', ['$firebase', studentsData]);

  function studentsData($firebase){
    var ref = new Firebase("https://cth-pilot.firebaseio.com/students");
    var students = $firebase(ref);
    return students;
  }

})();
