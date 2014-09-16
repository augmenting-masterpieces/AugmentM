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

		function calculatingInfographic(data) {
			// The function that calulates the inforgraphic information and returns the result.
			var result = "calculation";
			return result;
		}

		function InfographicData(result) {
			// Gets the elements and assigns the width's inline.
		}

    function galleryImages(data) {
    	// Creating append variable.
    	var content = "";

    	$(data.photos).each(function(){
    		content += "<img src=\"" +this.src+ "\" alt=\"" +this.name+ "\" " + "data=\""+this.number+ "\" >";
    	});

    	// Appending to HTML and Onclick.
    	$("#galleryCaseStudy").html(content).on("click", "img", galleryBackgroundChange);

    	// Running Owl.
    	owlCarouselConfig();
    }

    function galleryBackgroundChange(evt) {
    	// Determine which image from data-tag on element this.
			var image = $(evt.target);

			var info = {};
			info.src = image.attr("src");
			info.data = image.attr("data");

			console.log(info);

			$(".pictureGallery").css({"background":"linear-gradient( hsla(0, 0%, 0%, 0.20), hsla(0, 0%, 0%, 0.20)), url(" + info.src +") no-repeat center center / cover", "background-attachment": "fixed"});
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
		    itemsMobile : [479,1],
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
		    autoHeight : true,
		 
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