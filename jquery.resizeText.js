(function($) {
	$.fn.resizeText = function() {
		var node = $(this);
		node.text(resizeText($(this).css('font-size')));
		function resizeText(fontSize) {
			node.css('fontSize', parseFloat(fontSize) - 1);
			node.css('opacity', 1);
				if (node.height() >= (node.parent()).height()) {
					resizeText(node.css('font-size'));
				}
		}
	}
} (jQuery));