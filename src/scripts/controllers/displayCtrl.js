(function(){
  'use strict';

  angular.module('augm').controller('DisplayCtrl', [DisplayCtrl]);

	function DisplayCtrl($scope){
	    var vm = this;
	    console.log("Hello met disp!");
		return vm;
	}
})();