(function(){
  'use strict';

  angular.module('cth').filter('markdown', ['Showdown', '$sce', markdown]);
  
  function markdown (Showdown, $sce) {
    var converter = new Showdown.converter();
    return function (value) {
      var html = converter.makeHtml(value || '');
      return $sce.trustAsHtml(html);
    };
  }
})();
