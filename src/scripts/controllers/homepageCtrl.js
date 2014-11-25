(function(){
  'use strict';

  angular.module('augm').controller('HomepageCtrl', [HomepageCtrl]);

	function HomepageCtrl(){
	    var vm = this;
	 //    $( document ).ready( 
		//     .each(function () {
		// 	  var $spy = $(this).scrollspy('refresh');
		// 	});
		// );

		$('[data-spy="scroll"]').scrollspy();

	    return vm;
	}
})();