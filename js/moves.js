$(function() {
	var perso=0;

	$("#right").click(function() {
		perso++;
		changeText();
	});

	$("#left").click(function() {
		perso--;
		changeText();
	});

	function changeText(){
		perso = perso%4;
		switch(perso){
			case 0: //Sciences
				$('.right h4').html('Type : Scientifique');
				$('#carrousel img').attr("src","img/IMAC_Scientist.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚫⚫⚫⚫⚪');
				$('#skills li:nth-child(2)').html('Programmation : ⚫⚫⚫⚫⚪');
				$('#skills li:nth-child(3)').html('Arts : ⚫⚪⚪⚪⚪');
				$('#skills li:nth-child(4)').html('Communication : ⚫⚪⚪⚪⚪');
				$('#hiddenType').val('Science');
				break;
			case 1: //Art
				$('.right h4').html('Type : Artistique');
				$('#carrousel img').attr("src","img/IMAC_Arts.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚫⚪⚪⚪⚪');
				$('#skills li:nth-child(2)').html('Programmation : ⚫⚫⚪⚪⚪');
				$('#skills li:nth-child(3)').html('Arts : ⚫⚫⚫⚫⚫');
				$('#skills li:nth-child(4)').html('Communication : ⚫⚫⚪⚪⚪');
				$('#hiddenType').val('Art');

				break;
			case 2: //Communication
				$('.right h4').html('Type : Communication');
				$('#carrousel img').attr("src","img/IMAC_Bullshit.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚫⚪⚪⚪⚪');
				$('#skills li:nth-child(2)').html('Programmation : ⚫⚪⚪⚪⚪');
				$('#skills li:nth-child(3)').html('Arts : ⚫⚫⚫⚪⚪');
				$('#skills li:nth-child(4)').html('Communication : ⚫⚫⚫⚫⚫');
				$('#hiddenType').val('Comm');

				break;
			case 3: //Polyvalent
				$('.right h4').html('Type : Polyvalent');
				$('#carrousel img').attr("src", "img/IMAC_Mixte.png");
				$('#skills li:nth-child(1)').html('Sciences : ⚫⚫⚪⚪⚪');
				$('#skills li:nth-child(2)').html('Programmation : ⚫⚫⚫⚪⚪');
				$('#skills li:nth-child(3)').html('Arts : ⚫⚫⚪⚪⚪');
				$('#skills li:nth-child(4)').html('Communication : ⚫⚫⚫⚪⚪');
				$('#hiddenType').val('Mixte');

				break;
			default: break;
		}
	};

});
