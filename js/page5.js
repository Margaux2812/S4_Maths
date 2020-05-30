$(function () {


    $('#scorePlayer li:nth-child(1)').html('📓 Moyenne : ' + getNote() + '/20');

    var nbShot = 0;

    $("#rightShot").click(function () {
        if (nbShot < 10){
        nbShot++;
        $('#nbShot').val(nbShot);

        }
    });

    $("#leftShot").click(function () {
        if (nbShot > 0) {
            nbShot--;
            $('#nbShot').val(nbShot);

        }
    });

    
    $("#validShot").click(function () {
        if (gaussBool(6, nbShot, 5, 8) == true) {
            var bonus = uniform(0.01, 2.01).toPrecision(3) // Entre 0 et 1 points RANDOM HERE
            setNote(bonus);
            alert("Bravo !\n Tu as bien discuté avec M.Biri, il te trouve très sympa, alors il t'a donné " + bonus + " points bonus !\n Ta nouvelle moyenne est de " + getNote() + "/20 !");
        } else if (nbShot < 6) {
            alert("Mmmh...\n M.Biri t'a raconté plein de choses intéressantes !\n Mais il ne peut pas t'aider pour ta moyenne générale ! Tu aurais sûrement dû lui offrir un verre ou deux de plus !");
        }
        else {
            alert("Oups !\n M.Biri a trop bu, il ne peut pas t'aider dans l'état où il est ! \n Tu devrais l'aider à appeler un Uber.");
        }
        window.location = 'page6.html';

    });


    if (getLove() < 50) {
        $('h3').html('C\'est le gala mais tu as décidé de ne pas y aller !');
        alert("Aie ! Désolé, ton score de love est tellement bas que tu as peur de ne pas t'amuser au Gala.  \n Tu décides de ne pas y aller. \nDommage ! Tu aurais pu servir un coup à boire à tes professeurs préférés !")
        window.location = 'page6.html';

    } else {
        $('h3').html("Ouah c'est le jour du gala \n! Monsieur Biri aimerait bien boire un coup !\n Sers-le, peut-être qu\'il te révèlera les secrets de l\'IMAC !");
        }
});