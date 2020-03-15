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
			$('#carrousel img').attr("src","Art.png");
			$('#skills li:nth-child(1)').html('Sciences : ⚫⚫⚫⚫⚫');
			$('#skills li:nth-child(2)').html('Programmation : ⚫⚫⚫⚪⚪');
			$('#skills li:nth-child(3)').html('Arts : ⚫⚪⚪⚪⚪');
			$('#skills li:nth-child(4)').html('Communication : ⚫⚫⚪⚪⚪');
			break;
			case 1: //Programmation
			$('.right h4').html('Type : Programmeur');
			$('#carrousel img').attr("src","Art.png");
			$('#skills li:nth-child(1)').html('Sciences : ⚫⚫⚫⚫⚫');
			$('#skills li:nth-child(2)').html('Programmation : ⚫⚫⚫⚫⚫');
			$('#skills li:nth-child(3)').html('Arts : ⚫⚫⚪⚪⚪');
			$('#skills li:nth-child(4)').html('Communication : ⚫⚪⚪⚪⚪');
			break;
			case 2: //Art
			$('.right h4').html('Type : Artistique');
			$('#carrousel img').attr("src","Art.png");
			$('#skills li:nth-child(1)').html('Sciences : ⚫⚪⚪⚪⚪');
			$('#skills li:nth-child(2)').html('Programmation : ⚫⚫⚪⚪⚪');
			$('#skills li:nth-child(3)').html('Arts : ⚫⚫⚫⚫⚫');
			$('#skills li:nth-child(4)').html('Communication : ⚫⚫⚫⚫⚪');
			break;
			case 3: //Communication
			$('.right h4').html('Type : Communication');
			$('#carrousel img').attr("src","Art.png");
			$('#skills li:nth-child(1)').html('Sciences : ⚫⚫⚫⚪⚪');
			$('#skills li:nth-child(2)').html('Programmation : ⚫⚫⚫⚪⚪');
			$('#skills li:nth-child(3)').html('Arts : ⚫⚫⚫⚫⚪');
			$('#skills li:nth-child(4)').html('Communication : ⚫⚫⚫⚫⚫');
			break;
			default: break;
		}
	};

});
