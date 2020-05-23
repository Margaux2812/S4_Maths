var namePlayer, typeIMAC;
var note=0, love=0;
var skillArt=0, skillProg=0, skillScience=0, skillComm=0;



/***************************************
************ FONCTIONS INIT ************
****************************************/

function initSkills(typeSelected){
    if(typeSelected == "Science"){
        skillScience =4;
        skillProg =4;
        skillArt =1;
        skillComm=1;
        typeIMAC = "Science";
    }
    else if (typeSelected == "Art") {
        skillScience =1;
        skillProg =2;
        skillArt =5;
        skillComm =2;
        typeIMAC = "Art";
    }
    else if (typeSelected == "Comm") {
        skillScience =1;
        skillProg =1;
        skillArt =3;
        skillComm =5;
        typeIMAC = "Comm";
    }
    else { //Mixte
        skillScience =2;
        skillProg =3;
        skillArt =2;
        skillComm =3;
        typeIMAC = "Mixte"
    }
}

    function initName(inputName) {
        namePlayer = inputName;
    }


/***************************************
************ FONCTIONS SET *************
****************************************/


    function setNote(bonus){
        if (bonus+note > 20){
            note = 20;
        } 
        note += bonus;
    }

    function setLove(bonus){ // Can be negative
        love += bonus;
    }

    function setSkillScience(bonus){
        if (bonus+skillScience >5){
            skillScience = 5;
        }
        else skillScience +=bonus;
    }
    

/***************************************
************ FONCTIONS GET *************
****************************************/

function getName() {
    return namePlayer;
}

function getNote() {
   return note;
}

function getLove() { // Can be a malus
    return love;
}

function getSkillScience() {
   return skillScience;
}

function getSkillProg() {
    return skillProg;
}

function getSkillArt() {
    return skillArt;
}

function getSkillComm() {
    return skillComm;
}