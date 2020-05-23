$(function () {


/***************************************
************** INIT HEADER *************
****************************************/

$('#dataPlayer h4').html(getName());
console.log(getName());
$('#dataPlayer h5').html('IMAC '+getType());
$('#scorePlayer li:nth-child(1)').html('Note : '+getNote()+'/20');
$('#scorePlayer li:nth-child(2)').html('❤️Love : '+getLove());


/***************************************
*********** SPECIFIC FUNCTIONS**********
****************************************/


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
		return 500 + Math.round(Math.random() * 500); // à déplacer dans maths.js
	}

});