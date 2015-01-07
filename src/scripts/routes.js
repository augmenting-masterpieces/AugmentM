(function(){
  'use strict';

  angular.module('augm').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state("home", {
        views: {
          "nav": { 
            templateUrl: "../templates/functional/nav.html",
            controller: 'NavCtrl as nav'      
          },
          "main": { 
            templateUrl: "../templates/home.html"
          },
          "footer": { 
            templateUrl: "../templates/functional/footer.html",
            controller: 'NavCtrl as nav' }
        }
      })
      .state('home.subroutes', {
        url: "/home/:scrollTo",
        views: {
          "header": { 
            templateUrl: "../templates/home/header.html",
            controller: 'HeaderCtrl as head'                
          },
          "assumptions": { templateUrl: "../templates/home/assumptions.html" },
          "usercamerastudy": { templateUrl: "../templates/home/usercamerastudy.html" },
          "survey": { templateUrl: "../templates/home/survey.html" },
          "masonryviewer": { 
            templateUrl: "../templates/home/masonryviewer.html",
            controller: 'MasonryCtrl as mason'                
          },
          "demo": { templateUrl: "../templates/home/demo.html" },
          "evaluation": { templateUrl: "../templates/home/evaluation.html" },
          "theory": { templateUrl: "../templates/home/theory.html" },
          "literature": { templateUrl: "../templates/home/literature.html" },
          "about": { templateUrl: "../templates/home/about.html" }
        }
      })
      .state('impressum', {
        url: "/impressum",
        views: {
          "nav": { 
            templateUrl: "../templates/functional/nav.html",
            controller: 'NavCtrl as nav'      
          },
          "main": { 
            templateUrl: "../templates/impressum.html"
          },
          "footer": { 
            templateUrl: "../templates/functional/footer.html",
            controller: 'NavCtrl as nav'
          }
        }
      });

    $urlRouterProvider.when('/', '/home');
    // $urlRouterProvider.otherwise('/home');
  }
})();