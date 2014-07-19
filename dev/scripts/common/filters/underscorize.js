(function(){
  'use strict';

  angular.module('cth').filter('underscorize', ['$sce', underscorize]);
  
  function underscorize ($sce) {
    return function (value) {
      var html = value.split(" ").join("_");
      return $sce.trustAsHtml(html);
    };
  }
})();
