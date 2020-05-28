$(function () {

/*
Scénario : 

1. Choix entre les 3 boutons
2. En fonction du choix et du type d'imac -> Augmente les stats en science et/ou survie ( random loi : bernouilli)
3. En fonction des nouveaux stats : donne une note (loi proportionnelle à la survie et aux sciences, voir drive)
4. Alert qui affiche le résultat, la nouvelle note, et un bouton : onclick -> S3


Idée : Choix d'aller au bar --> Augmente le love ? 
*/

/*IMAC Science : Si Revise ou relis : probabilité de réussite 90%, si en soirée 80%
IMAC Art : si revise ou relis : 40% si soirée 30%
IMAC survivant : si revise 40%, si relis : 55%, si soirée 30%
IMAC polyvalent : si revise 70% si relis 60% si soirée 45% de chance de succès

Il y a 5 exercices à passer en signal, chaque exercice vaut deux points.

Si probabilité de gagner 5 fois : 10/10
Gagner 4 fois : 8/10
Gagner 3 fois : 6/10
Gagner 2 fois : 4/10
Gagner 1 fois : 2/10
Perdre : 0/10
*/
	$('#scorePlayer li:nth-child(1)').html('📓 Moyenne : ' + getNote()*2 + '/20');
	var aRelu = false;
	var aRevise = false;
	var estSorti = false;

	$('.buttonChoice').on('click', function (e) {
		e.preventDefault();
		switch($(this).index()){
			case 1: //Reviser
			reviser();
			break;
			case 2: //Relire la veille
			relire();
			break;
			case 3 : //Aller en soirée
			soiree();
			break;
			default: break;
		}

		takeTest();
	});

	function reviser(){
		aRevise = true;
		let probaChanceAugmentée;
		switch(getTypeInt()){
			case 1: probaChanceAugmentée = 0.9; 
			break;
			case 2: probaChanceAugmentée = 0.4;
			break;
			case 3: probaChanceAugmentée = 0.4;
			break;
			case 4: probaChanceAugmentée = 0.7;
			break;
			default: break;
		}

		const random = Math.random();

		if(random < probaChanceAugmentée){
			setSkillScience(1);
			alert("Tu as gagné 1 point de skill en science en plus grâce à cette action !");
		}
	}

	function relire(){
		aRelu = true;
		let probaChanceAugmentée;
		switch(getTypeInt()){
			case 1: probaChanceAugmentée = 0.9; 
			break;
			case 2: probaChanceAugmentée = 0.4;
			break;
			case 3: probaChanceAugmentée = 0.55;
			break;
			case 4: probaChanceAugmentée = 0.6;
			break;
			default: break;
		}

		const random = Math.random();

		if(random < probaChanceAugmentée){
			setSkillScience(1);
			alert("Tu as gagné 1 point de skill en science en plus grâce à cette action !");
		}
	}

	function soiree(){
		estSorti = true;
		let probaChanceAugmentée;
		switch(getTypeInt()){
			case 1: probaChanceAugmentée = 0.8; 
			break;
			case 2: probaChanceAugmentée = 0.3;
			break;
			case 3: probaChanceAugmentée = 0.3;
			break;
			case 4: probaChanceAugmentée = 0.45;
			break;
			default: break;
		}

		const random = Math.random();

		if(random < probaChanceAugmentée){
			if (aRevise){
			setSkillScience(2);
			alert("Bravo ! \nTu as refait tous les exercices, tu gagnes 2 points de skill en Science !");
			} else if (aRelu){
				setSkillScience(1);
				alert("Bravo ! \nTu as bien relu le cours, tu gagnes 1 point de skill en Science");
			} else {
				setSkillScience(1);
				alert("Ca alors ! \nOn ne sait pas comment, mais aller en soirée t'as fait gagner 1 point de skill en Science !\nSacré IMAC !");
			}
		}
		else{
			alert("Oups, ton choix n'a pas vraiment amélioré tes compétences !\n Il va falloir compter sur ce que tu sais déjà ! ")
		}
	}

	function takeTest(){
		var noteSignal = getNoteSignal();
		setNote(noteSignal);
		if (noteSignal < 5){
			var sentence = "Oups ! Tu n'as eu que "+noteSignal*2+"/20 au partiel de signal !"
		} else if (noteSignal < 7) {
			var sentence = "Tu as eu " + noteSignal * 2 + "/20 au partiel de signal ! Pas mal !"
		} else {
			var sentence = "Youhooou ! Tu as eu " + noteSignal * 2 + "/20 au partiel de signal ! Bravo !"
		}

		if (confirm(sentence)) {
			window.location = 'page4.html';
		  } else {
			window.location = 'index.html';
		  }
	}

	function getNoteSignal(){
		const data = bernouilli(5, getSkillScience()/5);
		const random = Math.random();
		if(random < data[1]){
			return 0;
		}else if (random < data[2]){
			return 2;
		}else if (random < data[3]){
			return 4;
		}else if (random < data[4]){
			return 6;
		}else if (random < data[5]){
			return 8;
		}else{
			return 10;
		}
	}
});