(function(){
  'use strict';

  angular.module('augm').controller('HeaderCtrl', [HeaderCtrl]);

	function HeaderCtrl($scope){
    var vm = this;

    // console.log($(".fadeclass")[0]);

    $(".fadeclass").map(function(){
    	var time = Math.random() * (6000 - 2000) + 2000;
        $(this).fadeTo(1, 0).delay(time).fadeTo(1000, 1);
    });

    $(".logos").hide().delay(7000).fadeIn(1000);
    $(".headerText").hide().delay(7000).fadeIn(1000);


	return vm;
	}
})();