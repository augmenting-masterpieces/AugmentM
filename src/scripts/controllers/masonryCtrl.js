(function(){
	'use strict';

	angular.module('augm').controller('MasonryCtrl', [MasonryCtrl]);

	function MasonryCtrl(){
		var vm = this;
		var data = importData();
	  
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

	    	// Appending to HTML and event listener.
	    	$("#photoPiece").append(imgTags).on("click", "div", data, galleryChange);
	    	$(".legend").html("<h1>" + data.photos[0].name + "</h1><p>" + data.photos[0].transcriptSnippet + "</p><img src=\"" + data.photos[0].src + "\"></img>").fadeIn();

	    	// Running Masonry
	    	masonryConfig();
	    }

	    function galleryChange(evt) {
	    	// galleryChange

				if ($(evt.target).attr("data")) {
					var photoData = {};
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

				// Angular templating Tryout -> To use ngAnimate (and to learn how to make things easyer)
				// vm.name = photoData.name;
				// vm.snippet = photoData.transcriptSnippet;
				// vm.src = photoData.src;

				$(".legend").fadeOut(function(){
					$(this).html("<h1>" + photoData.name + "</h1><p>\"" + photoData.quotes + "\"</p><p>" + photoData.transcriptSnippet + "</p><img src=\"" + photoData.src + "\"></img>").fadeIn();
				});
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

	    // this.hello = "bye";

    return vm;
	}
})();