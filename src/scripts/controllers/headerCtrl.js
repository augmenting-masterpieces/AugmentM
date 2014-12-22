(function(){
  'use strict';

  angular.module('augm').controller('HeaderCtrl', [HeaderCtrl]);

	function HeaderCtrl($scope){
    var vm = this;

    console.log($(".fadeclass")[0]);

    $(".fadeclass")[0].hide();

	return vm;
	}
})();