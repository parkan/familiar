(function( $ ){
	$.fn.familiar = function(options) {

		if(this === null || this[0].tagName != 'INPUT'){
			return false; // TODO: throw an Exception or something
		}

		this.addClass('haunted');

		var settings = {
			// symbols to display on keyboard
			alphabet : "▓□ђ░ıℜЗ▇▲∆⊇≥❖Λ•✝ℑ◊■▅†✌︎∞Ʌ▼█≤ЭЏ⊆‡▂э△ΔŤЭ",

			// spooky mode: fade in keyboard slowly, play sound
			spooky: false
		};
		if(options){
			$.extend( settings, options );
		}

		// KEYBOARD
		var layout = [];
		var rowsize = Math.floor(Math.sqrt(settings.alphabet.length));
		var numrows = Math.ceil(settings.alphabet.length / rowsize);
		for(var i = 0; ((i+1) * rowsize) <= settings.alphabet.length; i++){

			var row;

			if( (i+1) * rowsize >= settings.alphabet.length ){
				row = settings.alphabet.substr(i * rowsize, settings.alphabet.length - 1);
			} else {
				row = settings.alphabet.substr(i * rowsize, rowsize);
			}

			row = row.split('').join(' ');
			layout.push(row);
		}

		this.keyboard({
			layout : 'custom',
			customLayout : {
				'default' : layout
			},
			lockInput : false,
			restrictInput : false,
			spooky: settings.spooky,
			openOnFocus: false
		});

		// Secret feature: double-shift (desktop) or long-press (mobile) to reveal keyboard
		var lastShiftTime = 0;
		var shiftCount = 0;
		var longPressTimer = null;
		var DOUBLE_SHIFT_TIMEOUT = 500; // milliseconds
		var LONG_PRESS_DURATION = 800; // milliseconds for mobile long-press
		
		// Desktop: double-shift trigger
		$(document).keydown(function(event){
			if(
				$(document.activeElement).hasClass('haunted')
				&& event && event.keyCode == 16
				&& ! $(".ui-keyboard").is(':visible')
			  ){
				var now = Date.now();
				
				// Reset counter if too much time has passed
				if (now - lastShiftTime > DOUBLE_SHIFT_TIMEOUT) {
					shiftCount = 0;
				}
				
				shiftCount++;
				lastShiftTime = now;
				
				// Trigger keyboard on double shift
				if (shiftCount >= 2) {
					var kb = $(document.activeElement).getkeyboard();
					if (kb && typeof kb.reveal === 'function') {
						kb.reveal();
					}
					shiftCount = 0; // Reset after triggering
				}
			}
		});
		
		// Mobile: long-press trigger
		this.on('touchstart', function(e) {
			if (!$(".ui-keyboard").is(':visible')) {
				longPressTimer = setTimeout(function() {
					var kb = $(e.target).getkeyboard();
					if (kb && typeof kb.reveal === 'function') {
						kb.reveal();
					}
				}, LONG_PRESS_DURATION);
			}
		}).on('touchend touchmove', function() {
			if (longPressTimer) {
				clearTimeout(longPressTimer);
				longPressTimer = null;
			}
		});

		return this;
	};
})( jQuery );
