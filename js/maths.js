
/*Une fonction gaussienne est sous le forme 
f(x)= 1/ sigma*racine(2pi)  * e^{- (x-mu)^2  / 2\sigma^2
On a donc pris sigma = 2 et mu = center 
afin que notre courbe gaussienne soit un peu étalée et centrée en la valeur souhaitée*/
function gauss(center, x){ 
	return (20*Math.sqrt(2*Math.PI) *Math.exp(- Math.pow(x-center, 2)/8))/(2*Math.sqrt(2*Math.PI));
	/* Plutôt ?? : 
		var sigma = 2;
		return (1/(sigma*Math.sqrt(2*Math.PI))) *Math.exp(- (Math.pow(x-center, 2))/(2*Math.pow(sigma,2)));
		https://fr.wikipedia.org/wiki/Loi_normale 

		*/
}

function gaussBool(center, x, a,b){
	var sigma = 4;
	var val =(20 * Math.sqrt(2 * Math.PI) * Math.exp(- Math.pow(x - center, 2) / 16)) / (2 * Math.sqrt(2 * Math.PI));
	return (val >a && val<b);
}

function algoRejet(centerGauss){
	//Y peut etre compris entre 0 et 10
	let y = Math.random()*10;
	const u = Math.random();
	while(u > (gauss(centerGauss, y)/10)){
		y = Math.random()*10;
	}

	/*On aura plus de chance de tomber sous la courbe aux alentours de la valeur donnée*/
	
	return y;
}

function bernouilli(n, p){
	let data = new Array();
	let lastChance= 0;
	for(let i=1; i<6; i++){
		data[i] = lastChance + coefBinomial(n, i)* Math.pow(p, i) * Math.pow((1-p), (n-i));
		lastChance = data[i];
	}
	return data;
}

function coefBinomial(n, k){
	return factoriel(n)/(factoriel(k)*factoriel(n-k));
}

function factoriel(n){
	if (n<0) {
		alert ("Veuillez Saisir Un Entier Positif ou null");
		return "### Erreur ###";
	}else {
		if (n == 0) {
			return 1;
		}else {
			return n * factoriel (n-1);
		}
	}
}