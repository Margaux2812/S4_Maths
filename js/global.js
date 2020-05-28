// Using https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API for data


/***************************************
************ INFOS VARIABLES ***********
****************************************/
/*

[Comment utiliser sessionStorage]

Marche comme des variables classiques 
|| x = sessionStorage.nomClé
|| sessionStorage.nomClé = 5

_______________________________________

[Accéder à NOS variables]

sessionStorage.namePlayer => Nom
sessionStorage.typeIMAC => Type d'IMAC

sessionStorage.love => Score love en %
sessionStorage.note => Note /20

sessionStorage.skillScience => Skill Science /5
sessionStorage.skillProg  => Skill Prog /5
sessionStorage.skillArt  => Skill Art /5
sessionStorage.skillSurvie  => Skill Survie /5

________________________________________
*/




/***************************************
********* INIT HTML PLAYERDATA *********
****************************************/

	$('.dataPlayer h4').html(getName());
	$('.dataPlayer h5').html('IMAC ' + getType());
	$('#scorePlayer li:nth-child(2)').html('❤️ Love : ' + getLove() + '%');
    if(typeof getName() !== 'undefined'){
        $('#skills li:nth-child(1)').html('Sciences : '+ '⚫'.repeat(getSkillScience()) + '⚪'.repeat(5-getSkillScience()));
        $('#skills li:nth-child(2)').html('Programmation : '+ '⚫'.repeat(getSkillProg()) + '⚪'.repeat(5-getSkillProg()));
        $('#skills li:nth-child(3)').html('Arts : '+ '⚫'.repeat(getSkillArt()) + '⚪'.repeat(5-getSkillArt()));
        $('#skills li:nth-child(4)').html('Survie : '+ '⚫'.repeat(getSkillSurvie()) + '⚪'.repeat(5-getSkillSurvie()));
    }


/***************************************
************ FONCTIONS INIT ************
****************************************/

function initPlayer(typeSelected, inputName){  //Modification des variables via sessionStorage.nomVar
    if(typeSelected == "Science"){
        sessionStorage.skillScience =4; 
        sessionStorage.skillProg =4;
        sessionStorage.skillArt =1;
        sessionStorage.skillSurvie=1;
        sessionStorage.typeIMAC = "Science";
    }
    else if (typeSelected == "Art") {
        sessionStorage.skillScience =1;
        sessionStorage.skillProg =2;
        sessionStorage.skillArt =5;
        sessionStorage.skillSurvie =2;
        sessionStorage.typeIMAC = "Art";
    }
    else if (typeSelected == "Survie") {
        sessionStorage.skillScience =1;
        sessionStorage.skillProg =1;
        sessionStorage.skillArt =3;
        sessionStorage.skillSurvie =5;
        sessionStorage.typeIMAC = "Survie";
    }
    else { //Mixte
        sessionStorage.skillScience =2;
        sessionStorage.skillProg =3;
        sessionStorage.skillArt =2;
        sessionStorage.skillSurvie =3;
        sessionStorage.typeIMAC = "Mixte"
    }

    // Init love & Note
    sessionStorage.note = 0
    sessionStorage.love = 50

    // InitName
    sessionStorage.namePlayer = inputName;

}
 

/***************************************
************ FONCTIONS GET *************
****************************************/

function getName() { 
    return sessionStorage.namePlayer;
}

function getNote() { // Doit retourner un chiffre
    return parseFloat(sessionStorage.note);
}

function getLove() { // Doit retourner un chiffre
    return parseInt(sessionStorage.love);
}

function getType(){
    if (sessionStorage.typeIMAC == "Science"){
        return "Scientifique";
    }
    else if (sessionStorage.typeIMAC == "Art") {
        return "Artistique";
    }
    else if (sessionStorage.typeIMAC == "Survie") {
        return "Survivant";
    }
    else return "Polyvalent"

}

/*Avec des nombres*/
function getTypeInt(){
    if (sessionStorage.typeIMAC == "Science"){
        return 1;
    }
    else if (sessionStorage.typeIMAC == "Art") {
        return 2;
    }
    else if (sessionStorage.typeIMAC == "Survie") {
        return 3;
    }
    else return 4;
}

function getMatiere(int){
	switch(int){
		case 1 : return "Histoire de l'Art"; 
		break;
	    case 2 : return "Technique de l'image"; 
	    break;
	    case 3 : return "Signal"; 
	    break;
	    case 4 : return "Programmation"; 
	    break;
	    default : break;
	}
}

function getSkillScience() { // Doit retourner un chiffre
    return parseInt(sessionStorage.skillScience);
}

function getSkillProg() { // Doit retourner un chiffre
    return parseInt(sessionStorage.skillProg);
}

function getSkillArt() { // Doit retourner un chiffre
    return parseInt(sessionStorage.skillArt);
}

function getSkillSurvie() { // Doit retourner un chiffre
    return parseInt(sessionStorage.skillSurvie);
}


/***************************************
************ FONCTIONS SET *************
****************************************/


function setNote(bonus) {

    if ((parseFloat(bonus) + parseFloat(getNote())) > 20) {
        sessionStorage.note = 20;
    }
    else { 
        sessionStorage.note = parseFloat(getNote()) + parseFloat(bonus);
    }

}

function setLove(value) { // Can be negative
    if (value > 100) {
        sessionStorage.love = 100;
    }
    else sessionStorage.love = value;
}

function setSkillScience(bonus) {
    if (bonus + getSkillScience() > 5) {
        sessionStorage.skillScience = 5;
    }
    else sessionStorage.skillScience = getSkillScience()+bonus;
}

