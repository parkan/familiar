(function( $ ){
  $.fn.familiar = function(options) {

	  var settings = {
						alphabet : "▓□ђ░ıℜЗ▇▲∆⊇≥❖Λ•✝ℑ◊■▅†✌∞Ʌ▼█≤ЭЏ⊆‡▂э△Δ"
	  };
		if(options){
						$.extend( settings, options );
		}

	  this.keyup( function(){
		  var c = this.value.charAt(this.value.length - 1);

		  if(settings.alphabet.indexOf(c) > 0){
			  console.log(c);
		  }
	  });

		// KEYBOARD
		var layout = [];
		var rowsize = Math.floor(Math.sqrt(alphabet.length));
		for(var i = 0; ((i+1) * rowsize) <= alphabet.length; i++){
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

	  return this;
  };
})( jQuery );
