(function(){
  'use strict';

  angular.module('cth').controller('HomeCtrl', [HomeCtrl]);

	function HomeCtrl(){
	    var vm = this;

	   //  spanTextForSkew();

	   //  function spanTextForSkew() {
	   //  	var words = [];
		  //   $(".methodsContent p").each(function(){
		  //   	words.push($(this).text().split(" "));
		  //   });
		  //   $(".methodsContent p").empty();

		  //   var count = 1;
		  //   $(words).each(function(){
		  //   	for (var i=0; i<this.length; i++){
			 //        if (this[i]!=='') {
			 //            $(".methodsContent p:nth-of-type(" + count + " )").append("<span>"+this[i]+"</span> ");
		  //       	}
				// }
				// count++;
		  //   }); 	
	   //  }

	    return vm;
	}
})();