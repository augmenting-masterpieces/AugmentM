(function(){
  'use strict';

  angular.module('augm').controller('DisplayCtrl', [DisplayCtrl]);

	function DisplayCtrl(){
    var vm = this;

		$(function() {

		  $('body').panelSnap();

		});

	  return vm;
	}
})();