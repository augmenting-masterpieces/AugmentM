(function(){
  'use strict';

  angular.module('cth').controller('CaseStudyCtrl', [CaseStudyCtrl]);

	function CaseStudyCtrl(){
	    var vm = this;

	    $(document).ready(function() {
	    	owlCarouselConfig(); // Owl call with hardcoded images.
		});

		function importStudyParticipantsJson() {
			var data = "Ajax"; // Ajax call to get the participants data, data has to be created manually.
			return data;
		}

		function calculatingInfographic(data) {
			// The function that calulates the inforgraphic information and returns the result.
		}

		function assigningInfographicData(result) {
			// Gets the elements and assigns the width's inline.
		}

	    function creatingGalleryImages() {
	    	// Assign eventlisteners or are we going to use NGclick? meh, depends. Perhaps there is a way with owl.
	    	// Append the imagetags by code might be the way to go.
	    }

	    function assigningEventsToGalleryImages() {

	    }

	    function galleryBackgroundChange(data) {
	    	// Determine which image from data-tag on element this.

	    	// determine which background-image src from the data with the imagenumber. 

	    	// Get element jQuery

	    	// Set background-image inline
	    }

	    function mapGenerate() {
	    	// Nice idea, but problably not a good idea to put on the list right now.
	    }


		function owlCarouselConfig() {
			$("#galleryCaseStudy").owlCarousel({
 
			    // Most important owl features
			    items : 4,
			    itemsCustom : false,
			    itemsDesktop : [1199,3],
			    itemsDesktopSmall : [980,2],
			    itemsTablet: [768,2],
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