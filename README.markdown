♒♒♒♒♒♒♒♒ familiar.js ♒♒♒♒♒♒♒♒

familiar.js is an input method for [witch house](http://www.last.fm/tag/witch%20house/artists) band names. Put this on your search box and see just how utf8-compliant your fulltext search is. Lets the user search for their favorite ℑ⊇≥◊≤⊆ℜ tracks without going to the (unicode) astral plane.

[WIRED](http://www.wired.com/magazine/2011/01/pl_music_ungoogle/) suggests that the use of above-ASCII characters is a deliberate ploy to avoid findability, so this may be slightly evil. I think it's up to interpretation.

☼ watch an EXICTING video introduction from MUSIC HACK DAY [http://vimeo.com/19939093](http://vimeo.com/19939093)

----------------------- MAKE IT GO ----------------------

	// on your input element
	$("input#searchbox").familiar();

or


	$("input#searchbox").familiar({
		alphabet : "▓□ђ░ıℜЗ▇▲∆⊇≥❖Λ•✝ℑ◊■▅†✌∞Ʌ▼█≤ЭЏ⊆‡▂э△ΔŤЭ",
		spooky: false
	});

--------------- ☄ KNOWN ISSUES ☄ ---------------

Several apparently identical characters used in band names are actually
 different codepoints, for example ∆ in '†∆†' (U+2206 INCREMENT) vs
 Δ in 'Δressed Up Like Δogs' (U+0394 GREEK CAPITAL LETTER DELTA). 
The character used can vary between different tags for the same 
band, unsurprisingly. I recommend removing visually similar characters 
from the alphabet string and handling ambiguities on the backend. 

Using this on a page without correct charset=UTF-8 will not be pretty.

------------------------- CREDITS -------------------------

♾ "witch house" background based on image by [massmatt](http://www.flickr.com/photos/momentsnotice/2972064031/)

♾ uses "Keyboard" from [mottie](https://github.com/Mottie/Keyboard)

♾ thanks to [Brooklyn Rooftop Pahties](https://www.facebook.com/profile.php?id=100000790577286)

♾ original soundtrack by [matt ogle](http://mattogle.com/)

