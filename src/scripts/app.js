(function(){
  'use strict';

  var app = angular.module('augm', ['ngSanitize', 'templates-augm', 'ngAnimate', 'firebase', 'ui.router']);

  app.constant('Showdown', Showdown);
  app.constant('$', jQuery);
  app.constant('_', _);

})();
