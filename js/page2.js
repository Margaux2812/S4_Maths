window.matiere = {
  HDA: 1,
  TECH: 2,
  SIGNAL: 3,
  PROG: 4
};

window.type = {
  SCIENCE: 1,
  ART: 2,
  SURVIE: 3,
  POLYVALENT: 4
};

window.hasTurned = false;


$(function () {
	
$('#scorePlayer li:nth-child(1)').html('📓 Moyenne : Non noté');
var	partielInt;
var rouletteImg = document.getElementById('roulette');
	rouletteImg.addEventListener('click', onClick, false);

	function onClick() {

		if(!window.hasTurned){
			window.hasTurned = true;
		    this.removeAttribute('style');
			
			partiel = mathSelectPartiel();

			const deg = getDegFromMatiere(partiel);
		    
		    let css = '-webkit-transform: rotate(' + deg + 'deg);';
		    
		    this.setAttribute(
		        'style', css
		    );

		    update(getTypeInt(), partielInt);
	    }
	}

	function mathSelectPartiel(){ 
		return uniformPartiel();
	}

	function getDegFromMatiere(partiel){
		if(partiel == "HDA"){ // HDA
			partielInt = 1;
			return 180*3+10;
		}else if(partiel == "TECH"){ //TECH
			partielInt = 2;
			return 180*3+30;
		}else if(partiel == "SIGNAL"){ //SIGNAL
			partielInt=3;
			return 180*3+55;
		}else{ //PROG
			partielInt = 4;
			return 180*3+75;
		}
	}

	function update(type, matiere){
		let note;
		switch(matiere){
			case window.matiere.SIGNAL : note = getSignalResult(type);
			break;
			case window.matiere.PROG : note = getProgResult(type);
			break;
			case window.matiere.HDA : note = getHDAResult(type);
			break;
			case window.matiere.TECH : note = getTechResult(type);
			break;
			default: note = 0; break;
		}

		setNote(Math.trunc(note*10)/10);

		setTimeout(() => {  updateDisplay(matiere); }, 2000);
	}

	function getSignalResult(type){
		switch(type){
			case window.type.ART: return getInRange(2, 5);
			break;
			case window.type.SCIENCE: return getInRange(7, 10);
			break;
			case window.type.SURVIE: return getInRange(0, 5);
			break;
			case window.type.POLYVALENT: return getInRange(4, 7);
			break;
			default: break;
		}
	}

	function getProgResult(type){
		switch(type){
			case window.type.ART: return getInRange(0, 5);
			break;
			case window.type.SCIENCE: return getInRange(4, 7);
			break;
			case window.type.SURVIE: return getInRange(2, 5);
			break;
			case window.type.POLYVALENT: return getInRange(7, 10);
			break;
			default: break;
		}
	}

	function getHDAResult(type){
		switch(type){
			case window.type.ART: return getInRange(7, 10);
			break;
			case window.type.SCIENCE: return getInRange(0, 5);
			break;
			case window.type.SURVIE: return getInRange(4, 7);
			break;
			case window.type.POLYVALENT: return getInRange(2, 5);
			break;
			default: break;
		}
	}

	function getTechResult(type){
		switch(type){
			case window.type.ART: return getInRange(4, 7);
			break;
			case window.type.SCIENCE: return getInRange(2, 5);
			break;
			case window.type.SURVIE: return getInRange(7, 10);
			break;
			case window.type.POLYVALENT: return getInRange(0, 5);
			break;
			default: break;
		}
	}


	/*Algorithme du rejet avec une fonction gaussienne centrée
	au niveau de la moyenne du min et max voulu*/
	function getInRange(min, max){
		return algoRejet( (max+min)/2 );
	}

	/************************************
	*************AFFICHAGE***************
	************************************/

	function updateDisplay(matiere){
		if (getNote() < 5) {
			var sentence = "Oups ! Tu n'as eu que " + getNote() * 2 + "/20 au partiel de " + getMatiere(matiere) + "!"
		} else if (getNote() < 7) {
			var sentence = "Tu as eu " + getNote() * 2 + "/20 au partiel de " + getMatiere(matiere) + "! Pas mal !"
		} else {
			var sentence = "Youhooou ! Tu as eu " + getNote() * 2 + "/20 au au partiel de " + getMatiere(matiere) + "! Bravo !"
		}		
		alert(sentence);
		window.location = 'page3.html';
 
		  
	}

});