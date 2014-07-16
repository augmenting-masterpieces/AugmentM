(function(){
  'use strict';

  var app = angular.module('cth', ['firebase', 'ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'templates/postList.html',
        controller: 'PostCtrl as postList'
      })
      .state('home.id', {
        url: '/:post_id',
      })
      .state('about', {
        url: '/pilot',
        templateUrl: 'templates/pilot.html',
        controller: 'PilotCtrl as pilot'

      });
  });

  app.factory('studentsData', ['$firebase', studentsData]);

  function studentsData($firebase){
    var ref = new Firebase("https://cth-pilot.firebaseio.com/students");
    var students = $firebase(ref);
    return students;
  }
})();
