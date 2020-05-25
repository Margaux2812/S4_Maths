$(function () {

    /*
    Scénario : 
    
    /!\ Jeu le plus compliqué, doit exister du code déjà prêt

    1. Panier en bas de la fenêtre, on doit attraper le love / éviter le sel
    2a. Chaque coeur attrapé augmente aléatoirement le score de love (setLove(chiffre_positif))
    2b. Chaque sel attrapé diminue aléatoirement le score de love (setLove(chiffre_negatif))
    3. Au bout de X coeurs et X sels (X défini), on arrête le jeu
    4. Alert qui affiche le résultat, le nouveau love, et un bouton : onclick -> Calcul Gala biri

    
    */


// var canvas = document.getElementById("canvas");
// var contxt = canvas.getContext("2d");
// var lefty = false;
// var righty = false;
// var gameOver = true;
// var score = getLove();
// var love = new Image();
// var sel = new Image();


// document.addEventListener("keydown", keysDown, false);
// document.addEventListener("keyup", keysUp, false);

// // when key is pressed down, move
// function keysDown(e) {
// 	if(e.keyCode == 39){
// 		righty = true;
// 	}
// 	else if(e.keyCode == 37){
// 		lefty = true;
// 	}
// }
// // when key is released, stop moving
// function keysUp(e) {
// 	if(e.keyCode == 39){
// 		righty = false;
// 	}
// 	else if(e.keyCode == 37){
// 		lefty = false;
// 	}
	
// }

// // player specs
// var player = {
// 	size: 30,
// 	x: (canvas.width -30)/ 2,
// 	y: canvas.height - 30,
// 	color: "green"
// };

// // specs for balls you want to collect
// var goodArc = {
// 	x:[],
// 	y:[],
// 	speed: 2,
//     src : 'img/heart.png',
// 	state: []
// };
// var redNum = 0;

// // specs for balls you want to avoid
// var badArc = {
// 	x:[],
// 	y:[],
// 	speed: 2,
//     src: 'img/salt.png',

// };
// var blackNum = 0;
// var rad = 10;

// // adds value to x property of goodArc
// function drawNewGood(){
// 	if(Math.random() < .02){
// 		goodArc.x.push(Math.random() * canvas.width);
// 		goodArc.y.push(0);
// 		goodArc.state.push(true);

// 	}
// 	redNum = goodArc.x.length;
// }

// //adds values to x property of badArc
// function drawNewBad() {
// 	if(score < 30){
// 		if(Math.random() < .05){
// 			badArc.x.push(Math.random() * canvas.width);
// 			badArc.y.push(0);
// 		}
// 	}
// 	else if(score < 50){
// 		if(Math.random() < .1){
// 			badArc.x.push(Math.random() * canvas.width);
// 			badArc.y.push(0);
// 		}
// 	}
// 	else{
// 		if(Math.random() < .2){
// 			badArc.x.push(Math.random() * canvas.width);
// 			badArc.y.push(0);
// 		}
// 	}
// 	blackNum = badArc.x.length;
// }

// // draws red and blue balls
// function drawRedBall() {
// 	for(var i = 0; i < redNum; i++){
// 		if(goodArc.state[i] == true){
// 			//Keeps love of position in color array with changing redNum size
// 			var loveCol = (i + love);
//             ctx.drawImage(love, 0, 0);
// 			contxt.beginPath();
// 			contxt.arc(goodArc.x[i], goodArc.y[i], rad, 0, Math.PI * 2);
// 			contxt.closePath();
// 		}
// 	}
// }

// // draws black ball to avoid
// function drawBlackBall() {
// 	for(var i = 0; i < blackNum; i++){
// 		//Keeps love of position in color array with changing blackNum size
//         ctx.drawImage(sel, 0, 0);
// 		contxt.beginPath();
// 		contxt.arc(badArc.x[i], badArc.y[i], rad, 0, Math.PI * 2);
// 		contxt.closePath();
// 	}
// }
// // draw player to canvas
// function drawPlayer() {
// 	contxt.beginPath();
// 	contxt.rect(player.x, player.y, player.size, player.size);
// 	contxt.fillStyle = player.color;
// 	contxt.fill();
// 	contxt.closePath();
// }

// // moves objects in play
// function playUpdate() {
	
// 	if(lefty && player.x > 0){
// 		player.x -= 7;
// 	}
// 	if(righty && player.x + player.size < canvas.width) {
// 		player.x += 7;
// 	}
// 	for(var i = 0; i < redNum; i++){
// 		goodArc.y[i] += goodArc.speed;
// 	}
// 	for(var i = 0; i < blackNum; i++){
// 		badArc.y[i] += badArc.speed;
// 	}
	
// 	// collision detection
// 	for(var i = 0; i < redNum; i++){
// 		// Only counts collision once
// 		if(goodArc.state[i]){
// 			if(player.x < goodArc.x[i] + rad && player.x + 30 + rad> goodArc.x[i] && player.y < goodArc.y[i] + rad && player.y + 30 > goodArc.y[i]){
// 				score++
// 				// Cycles through goodArc's color array
// 				player.color = goodArc.color[(i + love) % 3];
// 				goodArc.state[i] = false;
// 			}
// 		}
// 		// Removes circles from array that are no longer in play
// 		if(goodArc.y[i] + rad > canvas.height){
// 			goodArc.x.shift();
// 			goodArc.y.shift();
// 			goodArc.state.shift();
// 			love++;
// 		}
// 	}
// 	for(var i = 0; i < blackNum; i++){
// 		if(player.x < badArc.x[i] + rad && player.x + 30 + rad > badArc.x[i] && player.y < badArc.y[i] + rad && player.y + 30 > badArc.y[i]){
// 			player.color = badArc.color[(i+sel)%5];
// 			badArc.y[i] = 0;
// 		}
// 		// Removes circles from x and y arrays that are no longer in play
// 		if(badArc.y[i] + rad > canvas.height){
// 			badArc.x.shift();
// 			badArc.y.shift();
// 			sel++;
// 		}
// 	}
// 	switch(score){
// 		case 20:
// 			badArc.speed = 3;
// 			goodArc.speed = 3;
// 			break;
// 		default:
// 			break;
// 	}

// }
// //signals end of game and resets x, y, and state arrays for arcs
// function gamesOver(){
// 	goodArc.x = [];
// 	badArc.x = [];
// 	goodArc.y = [];
// 	badArc.y = [];
// 	goodArc.state = [];
// 	gameOver = true;
// }

// //resets game, life, and score counters
// function playAgain() {
// 	gameOver = false;
// 	player.color = "green";
// 	score = 0;
// 	badArc.speed = 2;
// 	goodArc.speed = 2;
// }
// function draw(){
// 	contxt.clearRect(0, 0, canvas.width, canvas.height);
// 	if(!gameOver){
// 		drawPlayer();
// 		drawBlackBall();
// 		drawRedBall();
// 		playUpdate();
// 		drawNewGood();
// 		drawNewBad();
			
// 		//score
// 		contxt.fillStyle = "black";
// 		contxt.font = "20px Helvetica";
// 		contxt.textAlign = "left";
// 		contxt.fillText("Score: " + score, 10, 25);
// 	}
// 	else{
// 		contxt.fillStyle = "black";
// 		contxt.font = "25px Helvetica";
// 		contxt.textAlign = "center";
// 		contxt.fillText("GAME OVER!", canvas.width/2, 175);
		
// 		contxt.font = "20px Helvetica";		
// 		contxt.fillText("FINAL SCORE: " + score, canvas.width/2, 230);
// 	}
// 	requestAnimationFrame(draw);
// }



// draw();
// playAgain();

});