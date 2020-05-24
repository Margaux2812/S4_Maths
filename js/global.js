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
sessionStorage.skillComm  => Skill Comm /5

________________________________________
*/


/***************************************
********* INIT HTML PLAYERDATA *********
****************************************/

// Visible à partir de la page2

$('.dataPlayer h4').html(getName());
$('.dataPlayer h5').html('IMAC ' + getType());
$('#scorePlayer li:nth-child(1)').html('Note : ' + getNote() + '/20');
$('#scorePlayer li:nth-child(2)').html('❤️Love : ' + getLove() + '%');

/***************************************
************ FONCTIONS INIT ************
****************************************/

function initPlayer(typeSelected, inputName){  //Modification des variables via sessionStorage.nomVar
    if(typeSelected == "Science"){
        sessionStorage.skillScience =4; 
        sessionStorage.skillProg =4;
        sessionStorage.skillArt =1;
        sessionStorage.skillComm=1;
        sessionStorage.typeIMAC = "Science";
    }
    else if (typeSelected == "Art") {
        sessionStorage.skillScience =1;
        sessionStorage.skillProg =2;
        sessionStorage.skillArt =5;
        sessionStorage.skillComm =2;
        sessionStorage.typeIMAC = "Art";
    }
    else if (typeSelected == "Comm") {
        sessionStorage.skillScience =1;
        sessionStorage.skillProg =1;
        sessionStorage.skillArt =3;
        sessionStorage.skillComm =5;
        sessionStorage.typeIMAC = "Comm";
    }
    else { //Mixte
        sessionStorage.skillScience =2;
        sessionStorage.skillProg =3;
        sessionStorage.skillArt =2;
        sessionStorage.skillComm =3;
        sessionStorage.typeIMAC = "Mixte"
    }

    // Init love & Note
    sessionStorage.note = 0
    sessionStorage.love = 0

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
    return parseInt(sessionStorage.note);
}

function getLove() { // Doit retourner un chiffre
    return parseInt(sessionStorage.love);
}

function getType(){
    if (sessionStorage.typeIMAC = "Science"){
        return "Scientifique";
    }
    else if (sessionStorage.typeIMAC = "Art") {
        return "Artistique";
    }
    else if (sessionStorage.typeIMAC = "Comm") {
        return "Communiquant";
    }
    else return "Polyvalent"

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

function getSkillComm() { // Doit retourner un chiffre
    return parseInt(sessionStorage.skillComm);
}


/***************************************
************ FONCTIONS SET *************
****************************************/


function setNote(bonus) {
    if (bonus + getNote() > 20) {
        sessionStorage.note = 20;
    }
    else sessionStorage.note = getNote() + bonus;
}

function setLove(bonus) { // Can be negative
    if (bonus + getLove() > 100) {
        sessionStorage.love = 100;
    }
    else sessionStorage.love = getLove() + bonus;
}

function setSkillScience(bonus) {
    if (bonus + getSkillScience() > 5) {
        sessionStorage.skillScience = 5;
    }
    else sessionStorage.skillScience = getSkillScience()+bonus;
}
