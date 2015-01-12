(function(){
	"use strict";

	// On change animation directive. Is not doing remove animation tough. But the promise.then is working.
	// angular.module("augm").directive("animateOnChange", function($animate) {
	//   	return function(scope, elem, attr) {
	//       	scope.$watch(attr.animateOnChange, function(nv,ov) {
	//         	if (nv!=ov) {
	//          		var c = "change";
	//          		console.log("Detected a change");
	//          		$(elem).fadeOut(1000, function(){
	//          			console.log("Making datachange");
	//          			scope.mason.currentPhoto = scope.mason.futurePhoto;
	//          			$(elem).fadeIn();
	//          		});
	//           		// $animate.addClass(elem,c)
	//           		// 	.then(function() {
	// 	          	// 		console.log("removing class");
	// 	          	// 		console.log(elem);
	// 	          	// 		console.log(c);
	// 	          	// 		console.log($animate);
	// 	           //  		$animate.removeClass(elem,c);
	//           		// 	});
	//         	}
	//      	});
	//    	};
	// });

	angular.module("augm").controller("MasonryCtrl", ["$scope", "photos", MasonryCtrl]);

	function MasonryCtrl($scope, photos){
		var vm = this;

		// Setting up the viewmodel with the data + first item
		vm.photos = photos;
		vm.currentPhoto = photos[0];
		vm.futurePhoto = {};

		// Starting up packery after images are loaded
		$scope.imgLoadedEvents = {
	        done: function(instance) {
	        	// Controller is doing dom actions here, packery schould be refactored to the angular way.
				$("#photoPiece").packery({
				  columnWidth: ".grid-sizer",
				  itemSelector: ".item",
				  "isOriginTop": true
				});
	        }
    	};

    	return vm;
	}
})();