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
          "displayorder": { 
            templateUrl: "../templates/displayorder.html",
            controller: "DisplayCtrl as disp"
          },
          "footer": { templateUrl: "../templates/functional/footer.html" }
        }
      })
      .state('displayorderHome.withSubroutes', {
        url: '/',
        views: {
          "header": { 
            templateUrl: "../templates/content/header.html",
            controller: 'HeaderCtrl as head'                
          },
          "processmap": { templateUrl: "../templates/content/processmap.html" },
          "assumptions": { templateUrl: "../templates/content/assumptions.html" },
          "usercamerastudy": { templateUrl: "../templates/content/usercamerastudy.html" },
          "survey": { templateUrl: "../templates/content/survey.html" },
          "masonryviewer": { 
            templateUrl: "../templates/content/masonryviewer.html",
            controller: 'MasonryCtrl as mason'                
          },
          "demo": { templateUrl: "../templates/content/demo.html" },
          "evaluation": { templateUrl: "../templates/content/evaluation.html" },
          "theory": { templateUrl: "../templates/content/theory.html" },
          "literature": { templateUrl: "../templates/content/literature.html" },
          "about": { templateUrl: "../templates/content/about.html" }
        }
      });

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
  }
})();