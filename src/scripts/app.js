(function(){
  "use strict";

  var app = angular.module("augm", ["ngSanitize", "templates-augm", "ui.router", "mgcrea.ngStrap", "angular-images-loaded"]);

  app.constant("$", jQuery);
  app.constant("_", _);

})();
