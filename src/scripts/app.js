(function(){
  'use strict';

  var app = angular.module('augm', ['ngSanitize', 'templates-augm', 'ui.router']);

  app.constant('$', jQuery);
  app.constant('_', _);

})();
