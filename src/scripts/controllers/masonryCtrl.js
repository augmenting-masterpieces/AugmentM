(function(){
	"use strict";

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