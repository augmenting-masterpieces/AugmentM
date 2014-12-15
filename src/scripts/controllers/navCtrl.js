(function(){
  'use strict';

  angular.module('augm').controller('NavCtrl', ['$scope', '$location', '$anchorScroll', NavCtrl]);

  angular.module('augm')
    .config(function($collapseProvider) {
      angular.extend($collapseProvider.defaults, {
        startCollapsed: 'true'
      });
    });


  function NavCtrl($scope, $location, $anchorScroll){
    var vm = this;

    console.log("NavEvaluated");
    var hello = "Im sayingHElloooo";

    var gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      console.log("im run");
      $location.hash('theory');

      // call $anchorScroll()
      $anchorScroll();
    };






    // Old scrolling

    // $(function() {
    //   $('a[href*="#"]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // });

    return vm;
  }
})();