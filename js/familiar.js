(function( $ ){
  $.fn.familiar = function(options) {

	  var settings = {
						alphabet : "▓□ђ░ıℜЗ▇▲∆⊇≥❖Λ•✝ℑ◊■▅†✌∞Ʌ▼█≤ЭЏ⊆‡▂э△Δ"
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
						restrictInput : true
		});

		// save and detach original Mottie event
		var ev_show_keyboard = jQuery.extend(true, {}, this.data("events").focus[0]);
		this.unbind('focus'); // do not show keyboard on focus as normal

		// trigger keyboard display on detected WITCH HOUSE characters
	  this.keyup( function(){
		  var c = this.value.charAt(this.value.length - 1);

		  if(settings.alphabet.indexOf(c) > 0){
			  console.log(c);
				ev_show_keyboard.handler.apply(this);
		  }
	  });


	  return this;
  };
})( jQuery );
