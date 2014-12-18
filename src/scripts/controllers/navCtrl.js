(function(){
  'use strict';

  angular.module('augm').controller('NavCtrl', ['$scope', '$location', NavCtrl]);

  angular.module('augm')
    .config(function($collapseProvider) {
      angular.extend($collapseProvider.defaults, {
        startCollapsed: 'true'
      });
    });

  function NavCtrl($scope, $location, $anchorScroll){
    var vm = this;

    return vm;
  }
})();