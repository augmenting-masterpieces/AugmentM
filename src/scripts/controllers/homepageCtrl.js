(function(){
  'use strict';

  angular.module('augm').controller('HomepageCtrl', [HomepageCtrl]);

	function HomepageCtrl(){
	    var vm = this;

	    $('body').scrollspy({ target: '.navbar-example' });


	    return vm;
	}
})();