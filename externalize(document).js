function externalize (document) {
	var links = document.querySelectorAll("a", "area");
	var regExp = /^(https?)?:\/\/*$/igm
	
	for (var i = 0; i <	links.length; i++) {
		links[i] = link
		if(regExp.test(link.href))
			link.setAttribute('rel', 'external')
			link.setAttribute('target', '_blank')
		}
	};

