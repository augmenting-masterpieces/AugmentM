(function(){
  'use strict';

  angular.module('augm').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state("home", {
        views: {
          "main": { 
            templateUrl: "../templates/home.html"
          }
        }
      })
      .state('home.subroutes', {
        url: "/home/{scrollTo}",
        views: {
          "nav": { 
            templateUrl: "../templates/functional/nav.html",
            controller: "NavCtrl as nav"      
          },
          "header": { 
            templateUrl: "../templates/home/header.html",
            controller: 'HeaderCtrl as head'                
          },
          "assumptions": { templateUrl: "../templates/home/assumptions.html" },
          "usercamerastudy": { templateUrl: "../templates/home/usercamerastudy.html" },
          "survey": { templateUrl: "../templates/home/survey.html" },
          "masonryviewer": { 
            templateUrl: "../templates/home/masonryviewer.html",
            controller: "MasonryCtrl as mason"                
          },
          "demo": { templateUrl: "../templates/home/demo.html" },
          "evaluation": { templateUrl: "../templates/home/evaluation.html" },
          "theory": { templateUrl: "../templates/home/theory.html" },
          "literature": { templateUrl: "../templates/home/literature.html" },
          "about": { templateUrl: "../templates/home/about.html" },
          "footer": { 
            templateUrl: "../templates/functional/footer.html"
          }
        }
      })
      .state('impressum', {
        views: {
          "main": { 
            templateUrl: "../templates/impressum.html"
          }
        }
      })
      .state('impressum.subroutes', {
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
            templateUrl: "../templates/functional/footer.html"
          }
        }
      });

    $urlRouterProvider.when('/', '/home/');
    // $urlRouterProvider.otherwise('/home');
  }
})();