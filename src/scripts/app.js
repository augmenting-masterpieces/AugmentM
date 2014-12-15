(function(){
  'use strict';

  var app = angular.module('augm', ['ngSanitize', 'templates-augm', 'ui.router', 'mgcrea.ngStrap']);

  app.constant('$', jQuery);
  app.constant('_', _);

})();
