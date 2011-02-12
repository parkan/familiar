(function( $ ){
  $.fn.familiar = function(options) {
	  var settings = {
	  };

	  var alphabet = "▓□ђ░ıℜЗ▇▲∆⊇≥❖Λ•✝ℑ◊■▅†✌∞Ʌ▼█≤ЭЏ⊆‡▂э△Δ";

	  this.keyup( function(){
		  var c = this.value.charAt(this.value.length - 1);

		  if(alphabet.indexOf(c) > 0){
			  console.log(c);
		  }
	  });

		// KEYBOARD
		var layout = alphabet.split().join(' ');
		this.keyboard({
						layout : 'custom',
						customLayout : {
										default : layout
						},
						restrictInput : true
		});

	  return this;
  };
})( jQuery );
