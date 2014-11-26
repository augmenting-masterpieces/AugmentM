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
        url: '/home',
        views: {
          "header": { templateUrl: "../templates/content/header.html" },
          "process": { templateUrl: "../templates/content/process.html" },
          "assumptions": { templateUrl: "../templates/content/assumptions.html" },
          "usercamerastudy": { templateUrl: "../templates/content/usercamerastudy.html" },
          "uservideostudy": { templateUrl: "../templates/content/uservideostudy.html" },
          "survey": { templateUrl: "../templates/content/survey.html" },
          "masonry": { templateUrl: "../templates/content/masonry.html" },
          "demo": { templateUrl: "../templates/content/demo.html" },
          "evaluation": { templateUrl: "../templates/content/evaluation.html" }
        }
      });

    $urlRouterProvider.when('/', '/home');
  }
})();