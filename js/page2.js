$(function () {


/***************************************
*********** SPECIFIC FUNCTIONS**********
****************************************/

var img = document.querySelector('img');
	img.addEventListener('click', onClick, false);

	function onClick() {

		/* Adapter : 

		1. Random calculer le partiel parmi 4 possibilités (Loi : ???)
		2. En fonction de ça : Calculer de cb on doit tourner la roue 
			+ Ajouter X degres aléatoires (mais doit toujours tomber sur le bon partiel)
		3. Random sur la note en fonction du typeIMAC et du partiel (Choix entre 4 lois proportionnelles ? voir drive)
		4. Afficher résultat (alert), on click -> Next

		*/
		

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