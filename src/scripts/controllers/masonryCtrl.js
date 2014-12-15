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

	    	// Running Masonry
	    	masonryConfig();
	    }

	    function galleryChange(evt) {
	    	// galleryChange
				var photoData = {};
				var photoNumber = $(evt.target).attr("data");

				// Necessary loop because toplevel key is not set
				$(evt.data.photos).each(function(){
					if (this.number == photoNumber){
						photoData = this;
						return false;
					}
				});

				$(evt.currentTarget).toggleClass("itemClicked");

				$('#photoPiece').masonry();

				// console.log("im run");

				// // Changing HTML
				// $(".photoPiece").css({"background":"linear-gradient( hsla(0, 0%, 0%, 0.20), hsla(0, 0%, 0%, 0.20)), url(" + photoData.src +") no-repeat center center / cover", "background-attachment": "fixed"});
				
				
				// if (photoData.quotes !== null) {
				// 	$(".galleryQuote").html("\"" + photoData.quotes + "\"");
				// } else {
				// 	$(".galleryQuote").html("");
				// }
				$("#transcriptHeader").html(photoData.name);
				$("#transcriptSnippet").html(photoData.transcriptSnippet);
	    }

	    function masonryConfig() {
	    	var $container = $("#photoPiece");

				$container.imagesLoaded( function() {
				  $container.masonry({
					  columnWidth: ".grid-sizer",
					  itemSelector: ".item"
					});
				});
	    }

    return vm;
	}
})();