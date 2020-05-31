$(function() {
	sessionStorage.clear();
	var perso=40;

	$("#rightBtn").click(function() {
		perso++;
		changeText();
	});

	$("#leftBtn").click(function() {
		perso--;
		changeText();
	});

	function changeText(){
		perso = perso%4;
		switch(perso){
			case 0: //Sciences
				$('.right h4').html('Type : Scientifique');
				$('#carrousel img').attr("src","img/IMAC_Scientist.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚪⚪⚪⚪⚫');
				$('#skills li:nth-child(2)').html('Programmation : ⚪⚪⚪⚪⚫');
				$('#skills li:nth-child(3)').html('Arts : ⚪⚫⚫⚫⚫');
				$('#skills li:nth-child(4)').html('Survie : ⚪⚫⚫⚫⚫');
				$('#hiddenType').val('Science');
				break;
			case 1: //Art
				$('.right h4').html('Type : Artistique');
				$('#carrousel img').attr("src","img/IMAC_Arts.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚪⚫⚫⚫⚫');
				$('#skills li:nth-child(2)').html('Programmation : ⚪⚪⚫⚫⚫');
				$('#skills li:nth-child(3)').html('Arts : ⚪⚪⚪⚪⚪');
				$('#skills li:nth-child(4)').html('Survie : ⚪⚪⚫⚫⚫');
				$('#hiddenType').val('Art');

				break;
			case 2: //Survie
				$('.right h4').html('Type : Survie');
				$('#carrousel img').attr("src","img/IMAC_Bullshit.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚪⚫⚫⚫⚫');
				$('#skills li:nth-child(2)').html('Programmation : ⚪⚫⚫⚫⚫');
				$('#skills li:nth-child(3)').html('Arts : ⚪⚪⚪⚫⚫');
				$('#skills li:nth-child(4)').html('Survie : ⚪⚪⚪⚪⚪');
				$('#hiddenType').val('Survie');

				break;
			case 3: //Polyvalent
				$('.right h4').html('Type : Polyvalent');
				$('#carrousel img').attr("src", "img/IMAC_Mixte.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚪⚪⚫⚫⚫');
				$('#skills li:nth-child(2)').html('Programmation : ⚪⚪⚪⚫⚫');
				$('#skills li:nth-child(3)').html('Arts : ⚪⚪⚫⚫⚫');
				$('#skills li:nth-child(4)').html('Survie : ⚪⚪⚪⚫⚫');
				$('#hiddenType').val('Mixte');

				break;
			default: break;
		}
	};



/***************************************
********** ENVOYER FORMULAIRE **********
****************************************/
	$('#validIMAC').on('click', function (e) {
		e.preventDefault(); 
		
		if( $('#name').val() != ''){
			initPlayer($('#hiddenType').val(), $('#name').val());
			window.location = 'page2.html';
		}else{
			alert("Choisissez un prénom");
		}
	});

});