(function(){
	'use strict';

	angular.module("augm").controller("MasonryCtrl", ["$scope", "jsonData", MasonryCtrl]);

	function MasonryCtrl($scope, jsonData){
		var vm = this;

		console.log("this is the controller speaking, I bid you welcome data:");
		console.log(jsonData);

		importData();

		vm.header = "Loading Data";

		function importData() {
			var data = $.ajax({
				url: "api/fotoData.json",
				dataType: "json",
				success: function(data){
					galleryImages(data);
				},
				error: function(obj, err, errObj){
					console.error("Loading the JSON did not go as planned: " + err);
				}
			});
			return data;
		}

	    function galleryImages(data) {
	    	// Creating one long string with all images.
	    	var imgTags = "";

	    	$(data.photos).each(function(){
	    		imgTags += "<div class=\"item\"><img src=\"" +this.src+ "\" alt=\"" +this.name+ "\" " + "data=\""+this.number+ "\" ><hr class=\"itemText\"><p class=\"itemText\">" + this.transcriptSnippet + "<br class=\"itemText\"><br class=\"itemText\"> Title: " + this.name + "<br class=\"itemText\">Tag: " + this.tags[0] + "</p><hr class=\"itemText\"></div>";
	    	});

	    	// Adding event listener.
	    	$("#photoPiece").append(imgTags).on("click", "div", data, galleryChange);

	    	// Generating first item
	    	// $(".legend").html("<h1>" + data.photos[0].name + "</h1><p>" + data.photos[0].transcriptSnippet + "</p><img src=\"" + data.photos[0].src + "\"></img>").fadeIn();

	    	vm.header = data.photos[0].name;
			vm.quotes = data.photos[0].quotes;
			vm.snippet = data.photos[0].transcriptSnippet;
			vm.src = data.photos[0].src;

	    	// Running Masonry
	    	masonryConfig();
	    }

	    function galleryChange(evt) {
			var photoData = {};

			// Getting the right data element 
			if ($(evt.target).attr("data")) {
				var photoNumber = $(evt.target).attr("data");
			} else {
				return false;
			}
			
			// Necessary loop because toplevel key is not set
			$(evt.data.photos).each(function(){
				if (this.number == photoNumber){
					photoData = this;
					return false;
				}
			});

			vm.header = photoData.name;
			vm.quotes = photoData.quotes;
			vm.snippet = photoData.transcriptSnippet;
			vm.src = photoData.src;

			console.log(vm);

			// $(".legend").fadeOut(function(){
			// 	$(this).html("<h1>" + photoData.name + "</h1><p>\"" + photoData.quotes + "\"</p><p>" + photoData.transcriptSnippet + "</p><img src=\"" + photoData.src + "\"></img>").fadeIn();
			// });
	    }

	    function masonryConfig() {
	    	var $container = $("#photoPiece");

				$container.imagesLoaded( function() {
				  $container.packery({
					  columnWidth: ".grid-sizer",
					  itemSelector: ".item",
					  "isOriginTop": true
					});
				});
	    }
    return vm;
	}
})();