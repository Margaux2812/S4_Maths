
function gauss(center, x){ 
	return (20*Math.sqrt(2*Math.PI) *Math.exp(- Math.pow(x-center, 2)/8))/(2*Math.sqrt(2*Math.PI));
}

function algoRejet(centerGauss){
	//Y peut etre compris entre 0 et 10
	y = Math.random()*10;
	u = Math.random();
	while(u > (gauss(centerGauss, y)/10)){
		y = Math.random()*10;
	}

	/*On aura plus de chance de tomber sous la courbe aux alentours de la valeur donnée*/
	
	return y;
}