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
    		imgTags += "<img src=\"" +this.src+ "\" alt=\"" +this.name+ "\" " + "data=\""+this.number+ "\" >";
    	});

    	// Appending to HTML and event listener.
    	$("#galleryCaseStudy").html(imgTags).on("click", "img", data, galleryChange);

    	// Running Owl.
    	owlCarouselConfig();    	
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

		// Changing HTML
		$(".pictureGallery").css({"background":"linear-gradient( hsla(0, 0%, 0%, 0.20), hsla(0, 0%, 0%, 0.20)), url(" + photoData.src +") no-repeat center center / cover", "background-attachment": "fixed"});
		$(".conversation").html("<hr><p>" + photoData.transcriptSnippet + "<br><br> Title: " + photoData.name + "<br>Tag: " + photoData.tags[0] + "</p><hr>");
		
		if (photoData.quotes !== null) {
			$(".galleryQuote").html("\"" + photoData.quotes + "\"");
		} else {
			$(".galleryQuote").html("");
		}
    }

		function owlCarouselConfig() {

			$("#galleryCaseStudy").owlCarousel({

		    // Most important owl features
		    items : 6,
		    itemsCustom : false,
		    itemsDesktop : [1199,5],
		    itemsDesktopSmall : [980,4],
		    itemsTablet: [768,3],
		    itemsTabletSmall: false,
		    itemsMobile : [479,2],
		    singleItem : false,
		    itemsScaleUp : false,
		 
		    //Basic Speeds
		    slideSpeed : 200,
		    paginationSpeed : 800,
		    rewindSpeed : 1000,
		 
		    //Autoplay
		    autoPlay : false,
		    stopOnHover : false,
		 
		    // Navigation
		    navigation : false,
		    navigationText : ["prev","next"],
		    rewindNav : true,
		    scrollPerPage : false,
		 
		    //Pagination
		    pagination : true,
		    paginationNumbers: false,
		 
		    // Responsive 
		    responsive: true,
		    responsiveRefreshRate : 200,
		    responsiveBaseWidth: window,
		 
		    // CSS Styles
		    baseClass : "owl-carousel",
		    theme : "owl-theme",
		 
		    //Lazy load
		    lazyLoad : false,
		    lazyFollow : true,
		    lazyEffect : "fade",
		 
		    //Auto height
		    autoHeight : false,
		 
		    //JSON 
		    jsonPath : false,
		    jsonSuccess : false,
		 
		    //Mouse Events
		    dragBeforeAnimFinish : true,
		    mouseDrag : true,
		    touchDrag : true,
		 
		    //Transitions
		    transitionStyle : false,
		 
		    // Other
		    addClassActive : false,
		 
		    //Callbacks
		    beforeUpdate : false,
		    afterUpdate : false,
		    beforeInit: false, 
		    afterInit: false, 
		    beforeMove: false, 
		    afterMove: false,
		    afterAction: false,
		    startDragging : false,
		    afterLazyLoad : false
			});
		}

	    return vm;
	}
})();