$(function () {

    var canvas = document.getElementById("canvas");
    var contxt = canvas.getContext("2d");
    var lefty = false;
    var righty = false;
    var gameOver = true;
    var love;
    var played = false;
    var startTime;
    setLove(50);
    $('#scorePlayer li:nth-child(2)').html('❤️Love : ' + getLove() + '%');
    $('#scorePlayer li:nth-child(1)').html('📓 Moyenne : ' + getNote() + '/20');



    document.addEventListener("keydown", keysDown, false);
    document.addEventListener("keyup", keysUp, false);

    // when key is pressed down, move
    function keysDown(e) {
        if (e.keyCode == 39) {
            righty = true;
        }
        else if (e.keyCode == 37) {
            lefty = true;
        }
        else if (e.keyCode == 32 && gameOver && !played) {
            play();
        }
    }
    // when key is released, stop moving
    function keysUp(e) {
        if (e.keyCode == 39) {
            righty = false;
        }
        else if (e.keyCode == 37) {
            lefty = false;
        }

    }

    // player specs
    var playerImg = new Image();

        var player = {
            size: 100,
            x: (canvas.width - 100) / 2,
            y: canvas.height - 100,
            src: "./img/basket.png"
        };

     
        
    // specs for balls you want to collect

    var loveImg = new Image();
    var goodArc = {
        x: [],
        y: [],
        speed: 2,
        src : "./img/heart.png",
        state: []
    };
    var loveNum = 0;

    // specs for balls you want to avoid
    
    var saltImg = new Image();
    var badArc = {
        x: [],
        y: [],
        speed: 3,
        src : "./img/salt.png"

    };
    var saltNum = 0;
    var rad = 65;

    // adds value to x property of goodArc
    function drawNew() {
        var myRandom = uniform(0.001, 1.001) // RANDOM HERE
        if (myRandom < .03) { 
            goodArc.x.push(uniform(0.001, 1.001) * canvas.width); //RANDOM HERE
            goodArc.y.push(0);
            goodArc.state.push(true);

        } else if (myRandom < .10){

            badArc.x.push(uniform(0.001, 1.001) * canvas.width);
                badArc.y.push(0);
            }
        
        loveNum = goodArc.x.length;
        saltNum = badArc.x.length;

    }

    // draws red and blue balls
    function drawLove() {
        for (var i = 0; i < loveNum; i++) {
            if (goodArc.state[i] == true) {

                loveImg.src = goodArc.src;
                contxt.drawImage(loveImg, goodArc.x[i], goodArc.y[i], rad, rad);
            }
        }
    }

    // draws black ball to avoid
    function drawSalt() {
        for (var i = 0; i < saltNum; i++) {
            saltImg.src = badArc.src;
            contxt.drawImage(saltImg, badArc.x[i], badArc.y[i], rad, rad);
        }
    }
    // draw player to canvas
    function drawPlayer() {
        playerImg.src = player.src;
        contxt.drawImage(playerImg, player.x, player.y, player.size, player.size);
    }

    // moves objects in play
    function playUpdate() {


        if (lefty && player.x > 0) {
            player.x -= 7;

        }
        if (righty && player.x + player.size < canvas.width) {
            player.x += 7;

        }
        for (var i = 0; i < loveNum; i++) {
            goodArc.y[i] += goodArc.speed;

        }
        for (var i = 0; i < saltNum; i++) {
            badArc.y[i] += badArc.speed;

        }

        // collision detection
        for (var i = 0; i < loveNum; i++) {
            // Only counts collision once
            if (goodArc.state[i]) {
                if (player.x < goodArc.x[i] + rad && player.x + 30 + rad > goodArc.x[i] && player.y < goodArc.y[i] + rad && player.y + 30 > goodArc.y[i]) {
                    if (love <=95){
                    love+=5;
                    }
                    // Cycles through goodArc's color array
                    goodArc.state[i] = false;
                   
                }
            }
            // Removes circles from array that are no longer in play
            if (goodArc.y[i] + rad > canvas.height) {
                goodArc.x.shift();
                goodArc.y.shift();
                goodArc.state.shift();
            }
        }
        for (var i = 0; i < saltNum; i++) {
            if (player.x < badArc.x[i] + rad && player.x + 30 + rad > badArc.x[i] && player.y < badArc.y[i] + rad && player.y + 30 > badArc.y[i]) {
                if (love>=5){
                love-=5;
                }
                badArc.y[i] = 0;
            }
            // Removes circles from x and y arrays that are no longer in play
            if (badArc.y[i] + rad > canvas.height) {
                badArc.x.shift();
                badArc.y.shift();
            }
        }

        if ((Date.now() - startTime) > (30*1000)) { // X secondes de jeu
            gamesOver()
        }
    }

    //signals end of game and resets x, y, and state arrays for arcs
    function gamesOver() {
        goodArc.x = [];
        badArc.x = [];
        goodArc.y = [];
        badArc.y = [];
        goodArc.state = [];
        gameOver = true;
        played=true;
        setLove(love);
        $('#scorePlayer li:nth-child(2)').html('❤️Love : ' + getLove() + '%');

        if (love < 50) {
                alert("Terminé ! \n Tu es trop salé pour l'IMAC, ton score de love a baissé à " + love + "%.\n Conseil d'ami : Sois un peu moins... grognon.")
            
            } else if (love == 50) {
                alert("Terminé ! \n Ton score de love n'a pas bougé, tu restes à " + love + "%.\n Conseil d'ami : Essaie de faire des blagues, sur un malentendu ça peut faire rire quelqu'un.")

            } else {
                alert("Terminé ! \n Tu sais partager l'amour à l'IMAC ! Ton score de love est de " + love + "%.\n Conseil d'ami : Reste comme tu es, ça c'est IMAC !")
            }

            window.location = 'page5.html';

    }

    //resets game, life, and love counters
    function play() {
        gameOver = false;
        love = 50;
        badArc.speed = 2;
        goodArc.speed = 2;
        startTime = Date.now();
    }
    function draw() {
        contxt.clearRect(0, 0, canvas.width, canvas.height);
        if (!gameOver) {
            drawPlayer();
            drawSalt();
            drawLove();
            playUpdate();
            drawNew();
            //love
            contxt.fillStyle = "white";
            contxt.font = "20px Helvetica";
            contxt.textAlign = "left";
            contxt.fillText("Love: " + love +"%", 10, 25);

            //time
            contxt.textAlign = "right";
            contxt.fillText("Time: " + parseInt(30-(Date.now() - startTime)/1000)+"s", 500, 25);
        }
        else if (gameOver && !played){
            contxt.fillStyle = "white";
            contxt.textAlign = "center";

            contxt.font = "30px Helvetica";
            contxt.fillText("Tu as 30 secondes pour attraper le love et éviter le sel de l'IMAC !", canvas.width / 2, 175);

            contxt.font = "25px Helvetica";
            contxt.fillText("APPUIE SUR ESPACE POUR COMMENCER", canvas.width / 2, 300);

            contxt.font = "20px Helvetica";
            contxt.fillText("Utilise tes flèches <-  -> pour bouger ", canvas.width / 2, 475); 
        }
        requestAnimationFrame(draw);
    }



    draw();

});