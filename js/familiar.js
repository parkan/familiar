(function( $ ){
	$.fn.familiar = function(options) {

		if(this == null || this[0].tagName != 'INPUT'){
			return false; // TODO: throw an Exception or something
		}

		this.addClass('haunted');

		var settings = {
			// symbols to display on keyboard
			alphabet : "▓□ђ░ıℜЗ▇▲∆⊇≥❖Λ•✝ℑ◊■▅†✌∞Ʌ▼█≤ЭЏ⊆‡▂э△ΔŤЭ",

			// spooky mode: fade in keyboard slowly, play sound
			spooky: false
		};
		if(options){
			$.extend( settings, options );
		}

		// KEYBOARD
		var layout = [];
		var rowsize = Math.floor(Math.sqrt(settings.alphabet.length));
		for(var i = 0; ((i+1) * rowsize) <= settings.alphabet.length; i++){
			row = settings.alphabet.substr(i * rowsize, rowsize);
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
			spooky: settings.spooky
		});

		// save and detach original Mottie event
		var ev_show_keyboard = jQuery.extend(true, {}, this.data("events").focus[0]);
		this.unbind('focus'); // do not show keyboard on focus as normal

		// trigger keyboard display on detected WITCH HOUSE characters
		/*
		this.keyup( function(){
			var c = this.value.charAt(this.value.length - 1);

			if(settings.alphabet.indexOf(c) > 0){
				console.log(c);
				ev_show_keyboard.handler.apply(this);
			}
		});
		*/

		// trigger keyboard display on SHIFT while focused (Chrome 8/Safari 4/FF 3/IE)
		$(document).keydown( function(event){
			if(
				$(document.activeElement).hasClass('haunted')
				&& this && event.keyCode == 16
				&& ! $(".ui-keyboard").is(':visible')
			  ){
				ev_show_keyboard.handler.apply(this);
			}
		});

		return this;
	};
})( jQuery );
