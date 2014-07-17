(function(){
  'use strict';

  var app = angular.module('cth', ['ngSanitize', 'ngAnimate', 'firebase', 'ui.router']);


  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/posts/index');

    $stateProvider
      .state('posts', {
        url: '/posts',
        abstract: true,
        templateUrl: 'templates/postList.html',
        controller: 'PostCtrl as postList'
      })
      .state('posts.post', {
        url: '/:post_id'
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

  app.filter('markdown', function ($sce) {
    var converter = new Showdown.converter();
    return function (value) {
      var html = converter.makeHtml(value || '');
      return $sce.trustAsHtml(html);
    };
  });

  app.directive('myScroll', function(){
    return {
      restrict: 'EA',
      replace: false,
      link: function(scope, element, attrs){
        scope.$watch(scrollToPost);

        function scrollToPost(){
          var isActive = element.hasClass('active');
          if(isActive){
            setTimeout(function(){
              // var pos = element[0].getBoundingClientRect().top;
              // element[0].scrollIntoView();
              $(element[0]).scrollIntoView();
            }, 300);

          }
        }
      }
    };
  });
})();
