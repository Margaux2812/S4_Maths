$(function () {
    $('#scorePlayer li:nth-child(1)').html('📓 Moyenne : ' + getNote() + '/20');


    $('#titleh3').html('C\'est l\'heure de vérité !' );
    $('#ResultGame h2').html('Tu as eu une moyenne de '+getNote()+'/20 !');


    if (getNote() < 10) {
        $('#ResultGame h3').html('Malheureusement, ce n\'est pas suffisant pour faire ton semestre à l\'étranger !\n Une autre fois peut-être...');
    } else {
        $('#ResultGame h3').html('Félicitations !!! \n Tu peux prendre tes billets d\'avion et faire ton semestre à l\'étranger !');

    }

    $("#playAgain").click(function () {
        window.location = 'index.html';
    });
});