( ->
	$("body").ready ->
		$("body").toasty 
			sound: true
			image: chrome.extension.getURL 'toasty.png'
			sound: chrome.extension.getURL 'toasty.mp3'

		$("#toasty-guy-dan").css "z-index","99999999"

		# [t,o,a,s,t,y]
		keys = [84,79,65,83,84,89]
		nextKey = 0
		$(window).keydown (e) ->
		    key = e.which
		    if key == keys[nextKey]
		        nextKey++
		    else
		    	nextKey = 0

		    if nextKey == keys.length
		    	$("body").toasty 'pop'
		    	nextKey = 0

		    console.log "pressed #{key}"
		    console.log "#{nextKey}"
		
)()