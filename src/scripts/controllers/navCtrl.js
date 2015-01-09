(function(){
  'use strict';

  angular.module('augm').controller('NavCtrl', ['$window', '$rootScope', '$state', '$stateParams', '$location', '$scope', '$anchorScroll', '$uiViewScroll', '$timeout',  NavCtrl]);

  angular.module('augm')
    .config(function($collapseProvider) {
      angular.extend($collapseProvider.defaults, {
        startCollapsed: 'true'
      });
    });

  angular.module('augm').directive('eatClickIf', ['$parse', '$rootScope',
    function($parse, $rootScope) {
      return {
        // this ensure eatClickIf be compiled before ngClick
        priority: 100,
        restrict: 'A',
        compile: function($element, attr) {
          var fn = $parse(attr.eatClickIf);
          return {
            pre: function link(scope, element) {
              console.log("Am I Hungry?");
              console.log(fn(scope, {$event: event}));
              var eventName = 'click';
              element.on(eventName, function(event) {
                var callback = function() {
                  if (fn(scope, {$event: event})) {
                    console.log('yumyum');
                    // prevents ng-click to be executed
                    event.stopImmediatePropagation();
                    // prevents href 
                    event.preventDefault();
                    return false;
                  }
                };
                if ($rootScope.$$phase) {
                  scope.$evalAsync(callback);
                } else {
                  scope.$apply(callback);
                }
              });
            },
            post: function() {}
          };
        }
      };
    }
  ]);

  function NavCtrl($window, $rootScope, $state, $stateParams, $location, $scope, $anchorScroll, $uiViewScroll, $timeout){
    var vm = this;

    console.log("Current Param: "+ $stateParams.scrollTo);
    console.log("Current State: " + $state.is("home.subroutes"));

    // $(function() {
    //   $('a[href*="#"]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: (target.offset().top - 50)
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // });

    // $scope.$on('$stateChangeSuccess', function (event, toState) {
    //   if($stateParams.scrollTo){
    //       $location.hash($stateParams.scrollTo);
    //       // $anchorScroll.yOffset = 50;
    //       $anchorScroll();  
    //   }
    // });

    // $scope.gotoAnchor = function(x) {
    //   var newHash = 'anchor' + x;
    //   if ($location.hash() !== newHash) {
    //     // set the $location.hash to `newHash` and
    //     // $anchorScroll will automatically scroll to it
    //     $location.hash('anchor' + x);
    //   } else {
    //     // call $anchorScroll() explicitly,
    //     // since $location.hash hasn't changed
    //     $anchorScroll();
    //   }
    // };



    // this.gotoHash = function() {
    //   $location.hash('about');
    //   $uiViewScroll();
    // };

    return vm;
  }
})();