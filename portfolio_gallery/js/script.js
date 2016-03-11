$(document).ready(function(){

	$('nav a').on('click', function(){
		// Current class assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');

		// Set heading text
		$('h1#heading').text($(this).text());

		// Get and filter link text
		var category = $(this).text().toLowerCase().replace(' ', '-');

		// Remove hidden class if 'all-projects' is selected
		if (category == 'all-projects') {
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		}

		else {
			$('ul#gallery li').each(function() {
				if(!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden');
				}
				else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}

		// Stop link behavior
		return false;
	});

	// Mouse enter overlay 
	$('ul#gallery li').on('mouseenter', function() {
		
		console.log('Mouse enter is working.');
		
		// Get data attributes from each list item
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// Validation
		if(desc == null) {
			desc = 'Click to enlarge';
		}

		if(title == null) {
			title = '';
		}
		
		// Create overlay div 
		$(this).append('<div class="overlay"></div>');

		// Get overlay div 
		var overlay = $(this).children('.overlay');

		// Add HTML to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		// Fade in overlay 
		overlay.fadeIn(400);
	});

		// Mouse leave overlay 
	$('ul#gallery li').on('mouseleave', function() {
		
		console.log('Mouse leave is working.');
		
		// Create overlay div 
		$(this).append('<div class="overlay"></div>');

		// Get overlay div 
		var overlay = $(this).children('.overlay');

		// Fade in overlay 
		overlay.fadeOut(400);
	});

});