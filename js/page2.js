var matiere = {
  HDA: 1,
  TECH: 2,
  SIGNAL: 3,
  PROG: 4
}

var type = {
  SCIENCE: 1,
  ART: 2,
  SURVIE: 3,
  POLYVALENT: 4
}

console.log(getType());

$(function () {

var img = document.querySelector('img');
	img.addEventListener('click', onClick, false);

	function onClick() {

		/* Adapter : 

		1. Random calculer le partiel parmi 4 possibilités (Loi : ???)
		2. En fonction de ça : Calculer de cb on doit tourner la roue 
			+ Ajouter X degres aléatoires (mais doit toujours tomber sur le bon partiel)
		3. Random sur la note en fonction du typeIMAC et du partiel (Choix entre 4 lois proportionnelles ? voir drive)
		4. Alert qui affiche le résultat, la nouvelle note, et un bouton : onclick -> S2

		*/

	    this.removeAttribute('style');
	    
	    var deg = mathFunction();
	    
	    var css = '-webkit-transform: rotate(' + deg + 'deg);';
	    
	    this.setAttribute(
	        'style', css
	    );

	    updateNotes(getTypeInt(), getMatiere(deg));
	    
	}

	function mathFunction(){
		return 500 + Math.round(Math.random() * 500); // à déplacer dans maths.js
	}

	function getMatiere(deg){
		deg  = deg%90;
		if(deg>=0 && deg <= 22.5){
			return matiere.HDA;
		}else if(deg>22.5 && deg <= 45){
			return matiere.TECH;
		}else if(deg>45 && deg <= 67.5){
			return matiere.SIGNAL;
		}else{
			return matiere.PROG;
		}
	}

	function updateNotes(type, matiere){
		switch(matiere){
			case matiere.SIGNAL : setNote(getSignalResult(matiere));
			break;
			case matiere.PROG : setNote(getProgResult(matiere));
			break;
			case matiere.HDA : setNote(getHDAResult(matiere));
			break;
			case matiere.TECH : setNote(getTechResult(matiere));
			break;
			default: setNote(0); break;
		}
	}

	function getSignalResult(type){
		switch(type){
			case type.ART: return getInRange(2, 5);
			break;
			case type.SCIENCE: return getInRange(7, 10);
			break;
			case type.SURVIE: return getInRange(0, 5);
			break;
			case type.POLYVALENT: return getInRange(4, 7);
			break;
			default: break;
		}
	}

	function getProgResult(type){
		switch(type){
			case type.ART: return getInRange(0, 5);
			break;
			case type.SCIENCE: return getInRange(4, 7);
			break;
			case type.SURVIE: return getInRange(2, 5);
			break;
			case type.POLYVALENT: return getInRange(7, 10);
			break;
			default: break;
		}
	}

	function getHDAResult(type){
		switch(type){
			case type.ART: return getInRange(7, 10);
			break;
			case type.SCIENCE: return getInRange(0, 5);
			break;
			case type.SURVIE: return getInRange(4, 7);
			break;
			case type.POLYVALENT: return getInRange(2, 5);
			break;
			default: break;
		}
	}

	function getTechResult(type){
		switch(type){
			case type.ART: return getInRange(4, 7);
			break;
			case type.SCIENCE: return getInRange(2, 5);
			break;
			case type.SURVIE: return getInRange(7, 10);
			break;
			case type.POLYVALENT: return getInRange(0, 5);
			break;
			default: break;
		}
	}

	function getInRange(min, max){

	}

});