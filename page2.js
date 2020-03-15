var img = document.querySelector('img');
	img.addEventListener('click', onClick, false);

	function onClick() {
	    this.removeAttribute('style');
	    
	    var deg = mathFunction();
	    
	    var css = '-webkit-transform: rotate(' + deg + 'deg);';
	    
	    this.setAttribute(
	        'style', css
	    );
	}

	function mathFunction(){
		return 500 + Math.round(Math.random() * 500);
	}