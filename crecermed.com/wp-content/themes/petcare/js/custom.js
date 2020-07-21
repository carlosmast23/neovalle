jQuery(document).ready(function($){'use strict';
	
	// Sticky Nav
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 90 ) {
			$('#masthead').addClass('sticky-header');
		} else {
			$('#masthead').removeClass('sticky-header');
		}
	});

	//gototop
	$("#gototop").click(function(){ "use strict";
		$("html,body").animate({scrollTop:0},800);
		return false;
	});

	// Search
	$('.icon-search-btn').on('click', function(event) {
		event.preventDefault();
		var $sitesearch = $('.site-search');
		if ($sitesearch.hasClass('show')) {
			$sitesearch.removeClass('show');
			$sitesearch.fadeOut('fast');
		}else{
			$sitesearch.addClass('show');
			$sitesearch.fadeIn('slow');
		}
	});

	$('.icon-search-btn-close').on('click', function(event) {
		event.preventDefault();

		var $sitesearch = $('.site-search');
		$sitesearch.removeClass('show');
		$sitesearch.fadeOut('fast');
	});	

	/* ----------------------------------------------------------- */
	/*  Title
	/* ----------------------------------------------------------- */
	jQuery('.themewing-title h2,.widget h3').each(function() {
      var txt = jQuery(this).html();
      var index = txt.indexOf(' ');
      if (index == -1) {
         index = txt.length;
      }
      jQuery(this).html('<span>' + txt.substring(0, index) + '</span>' + txt.substring(index, txt.length));
   });

	/* ----------------------------------------------------------- */
	/*  Counter
	/* ----------------------------------------------------------- */

	$('.counter').counterUp({
	 delay: 10,
	 time: 1000
	});

	/* ----------------------------------------------------------- */
	/*  nano
	/* ----------------------------------------------------------- */
     $('.nano').nanoScroller();

    /* HEADER TRIGGER HANDLER */
    $("#header-trigger").click(function(){
      var body = $('body');
      if (body.hasClass('display-header'))
      {
        body.removeClass('display-header');
      } else {
        body.addClass('display-header');
      }
    });
	 
});