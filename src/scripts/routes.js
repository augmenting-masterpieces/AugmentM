(function(){
  'use strict';

  angular.module('augm').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          "displayorder": { templateUrl: "templates/displayorder.html" }
        }
      })
      .state('home.header', {
        url: '/header',
        views: {
          "header": { templateUrl: "templates/content/header.html" }
        }
      });

    $urlRouterProvider.when('/', '/home');
  }
})();
