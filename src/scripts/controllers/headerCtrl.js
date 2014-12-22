(function(){
  'use strict';

  angular.module('augm').controller('HeaderCtrl', [HeaderCtrl]);

	function HeaderCtrl($scope){
    var vm = this;

    // console.log($(".fadeclass")[0]);

    $(".fadeclass").map(function(){
    	var time = Math.random() * (7000 - 2000) + 2000;
    	$(this).hide().fadeIn(time);
    });

    $(".logos").hide().fadeIn(5000);
    $(".headerText").hide().fadeIn(5000);


	return vm;
	}
})();