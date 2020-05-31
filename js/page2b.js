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
    var rouletteImg = document.getElementById('roulette');
    rouletteImg.addEventListener('click', onClick, false);

    function onClick() {

		/* Adapter : 

		1. Random calculer le partiel parmi 4 possibilités (Loi : ???)
		2. En fonction de ça : Calculer de cb on doit tourner la roue 
			+ Ajouter X degres aléatoires (mais doit toujours tomber sur le bon partiel)
		3. Random sur la note en fonction du typeIMAC et du partiel (Choix entre 4 lois proportionnelles ? voir drive)
		4. Alert qui affiche le résultat, la nouvelle note, et un bouton : onclick -> S2

		*/

        if (!window.hasTurned) {
            window.hasTurned = true;
            this.removeAttribute('style');

            const deg = mathSelectPartiel();

            let css = '-webkit-transform: rotate(' + deg + 'deg);';

            this.setAttribute(
                'style', css
            );

            update(getTypeInt(), getMatiereFromDeg(deg));
        }
    }

    function mathSelectPartiel() { // Description -> Loi uniforme générant entre 500 et 1000
        return Math.round(uniform(500, 1000));
    }

    function getMatiereFromDeg(deg) {
        deg = deg % 90;
        if (deg >= 0 && deg <= 22.5) {
            return matiere.HDA;
        } else if (deg > 22.5 && deg <= 45) {
            return matiere.TECH;
        } else if (deg > 45 && deg <= 67.5) {
            return matiere.SIGNAL;
        } else {
            return matiere.PROG;
        }
    }

    function update(type, matiere) {
        let note;
        switch (matiere) {
            case window.matiere.SIGNAL: note = getSignalResult(type);
                break;
            case window.matiere.PROG: note = getProgResult(type);
                break;
            case window.matiere.HDA: note = getHDAResult(type);
                break;
            case window.matiere.TECH: note = getTechResult(type);
                break;
            default: note = 0; break;
        }

        setNote(Math.trunc(note * 10) / 10);

        setTimeout(() => { updateDisplay(matiere); }, 2000);
    }

    function getSignalResult(type) {
        switch (type) {
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

    function getProgResult(type) {
        switch (type) {
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

    function getHDAResult(type) {
        switch (type) {
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

    function getTechResult(type) {
        switch (type) {
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
    function getInRange(min, max) {
        return algoRejet((max + min) / 2);
    }

	/************************************
	*************AFFICHAGE***************
	************************************/

    function updateDisplay(matiere) {
        if (getNote() < 5) {
            var sentence = "Oups ! Tu n'as eu que " + getNote() * 2 + "/20 au partiel de " + getMatiere(matiere) + "!"
        } else if (getNote() < 7) {
            var sentence = "Tu as eu " + getNote() * 2 + "/20 au partiel de " + getMatiere(matiere) + "! Pas mal !"
        } else {
            var sentence = "Youhooou ! Tu as eu " + getNote() * 2 + "/20 au au partiel de " + getMatiere(matiere) + "! Bravo !"
        } if (confirm(sentence)) {
            window.location = 'page3.html';
        } else {
            window.location = 'index.html';
        }
    }

});