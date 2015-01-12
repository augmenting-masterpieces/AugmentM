(function(){
  "use strict";

  var app = angular.module("augm", ["ngSanitize", "templates-augm", "ui.router", "mgcrea.ngStrap", "angular-images-loaded", "ngAnimate"]);

  app.constant("$", jQuery);
  app.constant("_", _);

})();
