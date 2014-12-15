(function(){
  'use strict';

  angular.module('augm').controller('NavCtrl', ['$scope', '$location', '$anchorScroll', NavCtrl]);

  angular.module('augm')
    .config(function($collapseProvider) {
      angular.extend($collapseProvider.defaults, {
        startCollapsed: 'true'
      });
    });

  // angular.module('augm').directive('anchorSmoothScroll', function($location) {
 
  //   return {
  //     restrict: 'A',
  //     replace: false,
  //     scope: {
  //         'anchorSmoothScroll': '@'
  //     },

  //     link: function($scope, $element, $attrs) {

  //         initialize();
  
  //         /* initialize -
  //         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  //         function initialize() {
  //             createEventListeners();
  //         }

  //         /* createEventListeners -
  //         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  //         function createEventListeners() {
  //             // listen for a click
  //             $element.on('click', function() {
  //                 // set the hash like a normal anchor scroll
  //                 console.log("scope:");
  //                 console.log($scope.anchorSmoothScroll);
  //                 console.log("locationscope:");
  //                 console.log($location.hash($scope.anchorSmoothScroll));
  //                 $location.hash($scope.anchorSmoothScroll);

  //                 // smooth scroll to the passed in element
  //                 scrollTo($scope.anchorSmoothScroll);
  //             });
  //         }

  //         /* scrollTo -
  //         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  //         function scrollTo(eID) {

  //             // This scrolling function 
  //             // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
              
  //             var i;
  //             var startY = currentYPosition();
  //             var stopY = elmYPosition(eID);
  //             var distance = stopY > startY ? stopY - startY : startY - stopY;
  //             if (distance < 100) {
  //                 scrollTo(0, stopY); return;
  //             }
  //             var speed = Math.round(distance / 100);
  //             if (speed >= 20) speed = 20;
  //             var step = Math.round(distance / 25);
  //             var leapY = stopY > startY ? startY + step : startY - step;
  //             var timer = 0;
  //             if (stopY > startY) {
  //                 for (i = startY; i < stopY; i += step) {
  //                     setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
  //                     leapY += step; if (leapY > stopY) leapY = stopY; timer++;
  //                 } return;
  //             }
  //             for (i = startY; i > stopY; i -= step) {
  //                 setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
  //                 leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  //             }
  //         }
          
  //         /* currentYPosition -
  //         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  //         function currentYPosition() {
  //             // Firefox, Chrome, Opera, Safari
  //             if (window.pageYOffset) {
  //                 return window.pageYOffset;
  //             }
  //             // Internet Explorer 6 - standards mode
  //             if (document.documentElement && document.documentElement.scrollTop) {
  //                 return document.documentElement.scrollTop;
  //             }
  //             // Internet Explorer 6, 7 and 8
  //             if (document.body.scrollTop) {
  //                 return document.body.scrollTop;
  //             }
  //             return 0;
  //         }

  //         /* scrollTo -
  //         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  //         function elmYPosition(eID) {
  //             var elm = document.getElementById(eID);
  //             var y = elm.offsetTop;
  //             var node = elm;
  //             while (node.offsetParent && node.offsetParent != document.body) {
  //                 node = node.offsetParent;
  //                 y += node.offsetTop;
  //             } return y;
  //         }
  //     }
  //   };
  // });  


  function NavCtrl($scope, $location, $anchorScroll){
    var vm = this;

    // console.log("NavEvaluated");
    // this.hello = "Im sayingHElloooo";

    // $scope.gotoBottom = function() {
    //   // set the location.hash to the id of
    //   // the element you wish to scroll to.
    //   console.log("im run");
    //   $location.hash('theory');

    //   // call $anchorScroll()
    //   $anchorScroll();
    // };






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