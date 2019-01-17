(function($) {
	$.fn.extend({
		resizeText: function(options) {
			return this.each(function() {
				var defaults = {
					height: "80",
				};
				options = $.extend(defaults, options);
				var height = options.height + "px";
				var node = $(this);
				node.parent().css('height', height)
				node.text(resizeTextSize($(this).css('font-size')));
				function resizeTextSize(fontSize) {
					node.css('fontSize', parseFloat(fontSize) - 1);
					node.css('opacity', 1);
						if (node.height() >= (node.parent()).height()) {
							resizeTextSize(node.css('font-size'));
						}
				}
			})
		}
	})
} (jQuery));