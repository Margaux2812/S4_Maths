
/*Une fonction gaussienne est sous le forme 
f(x)= 1/ sigma*racine(2pi)  * e^{- (x-mu)^2  / 2\sigma^2
On a donc pris sigma = 2 et mu = center 
afin que notre courbe gaussienne soit un peu étalée et centrée en la valeur souhaitée*/
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