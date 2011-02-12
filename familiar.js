(function( $ ){
  $.fn.familiar = function(options) {
	  var settings = {
	  };

	  var alphabet = "▓□ђ░ıℜЗ▇▲∆⊇≥❖Λ•✝ℑ◊■▅†✌∞Ʌ▼█≤ЭЏ⊆‡▂э△Δ";

	  this.change( function(){
		  var c = this.value.charAt(this.value.length - 1);

		  if(alphabet.indexOf(c) > 0){
			  console.log(c);
		  }
	  });
  };
})( jQuery );

