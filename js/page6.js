$(function () {
    $('#scorePlayer li:nth-child(1)').html('📓 Moyenne : ' + getNote() + '/20');

    $('.myPlayer img').attr('src', srcChibi);
    $('#titleh3').html('C\'est l\'heure de vérité !' );
    $('#content6 h2').html('Tu as eu une moyenne de '+getNote()+'/20 !');


    if (getNote() < 10) {
        $('#content6 h3').html('Malheureusement, ce n\'est pas suffisant pour faire ton semestre à l\'étranger !\n Une autre fois peut-être...');
    } else {
        $('#content6 h3').html('Félicitations !!! \n Tu peux prendre tes billets d\'avion et faire ton semestre à l\'étranger !');

    }

    $("#playAgain").click(function () {
        window.location = 'index.html';
    });
});