(function(){
  'use strict';

  angular.module('augm').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('displayorderHome', {
        views: {
          "nav": { 
            templateUrl: "../templates/functional/nav.html",
            controller: 'NavCtrl as nav',      
          },
          "displayorder": { templateUrl: "../templates/displayorder.html" },
          "footer": { templateUrl: "../templates/functional/footer.html" }
        }
      })
      .state('displayorderHome.withSubroutes', {
        url: '/home',
        views: {
          "header": { templateUrl: "../templates/content/header.html" },
          "process": { templateUrl: "../templates/content/process.html" },
          "assumptions": { templateUrl: "../templates/content/assumptions.html" },
          "uservideostudy": { templateUrl: "../templates/content/uservideostudy.html" }
        }
      });

    $urlRouterProvider.when('/', '/home');
  }
})();