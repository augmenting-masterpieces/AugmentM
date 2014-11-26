(function(){
  'use strict';

  angular.module('augm').controller('DisplayCtrl', [DisplayCtrl]);

	function DisplayCtrl(){
    var vm = this;

    console.log("hi");

    var options = {
		  $menu: false,
		  menuSelector: 'a',
		  panelSelector: 'section',
		  namespace: '.panelSnap',
		  onSnapStart: function(){},
		  onSnapFinish: function(){},
		  onActivate: function(){},
		  directionThreshold: 50,
		  slideSpeed: 200,
		  easing: 'linear',
		  keyboardNavigation: {
		    enabled: false,
		    nextPanelKey: 40,
		    previousPanelKey: 38,
		    wrapAround: true
		  }
		};

		$('main').panelSnap(options);
	  return vm;
	}
})();