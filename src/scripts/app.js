(function(){
  'use strict';

  var app = angular.module('cth', ['ngSanitize', 'templates-cth', 'ngAnimate', 'firebase', 'ui.router']);

  app.constant('Showdown', Showdown);
  app.constant('$', jQuery);
  app.constant('_', _);

  app.factory('studentsData', ['$firebase', studentsData]);

})();
