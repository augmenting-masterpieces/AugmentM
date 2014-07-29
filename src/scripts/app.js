(function(){
  'use strict';

  var app = angular.module('cth', ['ngSanitize', 'templates-cth', 'ngAnimate', 'firebase', 'ui.router']);

  app.constant('Showdown', Showdown);
  app.constant('$', jQuery);
  app.constant('_', _);

  app.factory('studentsData', ['$firebase', studentsData]);

  function studentsData($firebase){
    var ref = new Firebase("https://cth-pilot.firebaseio.com/students");
    var students = $firebase(ref);
    return students;
  }

})();
