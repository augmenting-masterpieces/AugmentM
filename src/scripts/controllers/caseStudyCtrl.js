(function(){
	'use strict';

	angular.module('cth').controller('CaseStudyCtrl', [CaseStudyCtrl]);

	function CaseStudyCtrl(){
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
    		imgTags += "<div class=\"item\"><img src=\"" +this.src+ "\" alt=\"" +this.name+ "\" " + "data=\""+this.number+ "\" ></div>";
    	});

    	// Appending to HTML and event listener.
    	$("#photoPiece").html(imgTags).on("click", "div", data, galleryChange);

    	// Running Owl.
    	// owlCarouselConfig();

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

			console.log("clicked!");
			console.log(evt.currentTarget);	

			// $(evt.currentTarget).addClass("itemClicked");

			// console.log("im run");

			// // Changing HTML
			// $(".photoPiece").css({"background":"linear-gradient( hsla(0, 0%, 0%, 0.20), hsla(0, 0%, 0%, 0.20)), url(" + photoData.src +") no-repeat center center / cover", "background-attachment": "fixed"});
			// $(".conversation").html("<hr><p>" + photoData.transcriptSnippet + "<br><br> Title: " + photoData.name + "<br>Tag: " + photoData.tags[0] + "</p><hr>");
			
			// if (photoData.quotes !== null) {
			// 	$(".galleryQuote").html("\"" + photoData.quotes + "\"");
			// } else {
			// 	$(".galleryQuote").html("");
			// }
    }

    function masonryConfig() {
    	console.log('nooooo');
    	var $container = $('#photoPiece');

			$container.imagesLoaded( function() {
			  $container.masonry({
				  columnWidth: 0,
				  itemSelector: '.item'
				});
			});
			console.log('oh yeah!');
    }

    return vm;
	}
})();