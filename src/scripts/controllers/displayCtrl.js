(function(){
  'use strict';

  angular.module('augm').controller('DisplayCtrl', ['$scope', DisplayCtrl]);

	function DisplayCtrl($scope){
    var vm = this;

  //   console.log("hi");

  //   var doneOnce = 0;

  //   $scope.$on('$viewContentLoaded', function(event){
  //   	if(doneOnce === 0){ 
	 //    	var options = {
		// 		  $menu: false,
		// 		  menuSelector: 'a',
		// 		  panelSelector: 'section',
		// 		  namespace: '.panelSnap',
		// 		  onSnapStart: function(){},
		// 		  onSnapFinish: function(){},
		// 		  onActivate: function(){},
		// 		  directionThreshold: 50,
		// 		  slideSpeed: 200,
		// 		  easing: 'linear',
		// 		  keyboardNavigation: {
		// 		    enabled: false,
		// 		    nextPanelKey: 40,
		// 		    previousPanelKey: 38,
		// 		    wrapAround: true
		// 		  }
		// 		};
		// 		$('main').panelSnap(options);
		// 		console.log("LOOOOOOOOOOOAAAAAAAAADDDDDDDED");
		// 		doneOnce = 1;
		// 	}
		// });

    
	  return vm;
	}
})();