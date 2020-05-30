
/*Une fonction gaussienne est sous le forme 
f(x)= 1/ sigma*racine(2pi)  * e^{- (x-mu)^2  / 2\sigma^2
On a donc pris sigma = 2 et mu = center 
afin que notre courbe gaussienne soit un peu étalée et centrée en la valeur souhaitée
On multiplie le tout par 20sqrt(2pi) afin que le max soit égal à 1
*/
function gauss(center, x){ 
	return (20*Math.sqrt(2*Math.PI) *Math.exp(- Math.pow(x-center, 2)/8))/(2*Math.sqrt(2*Math.PI));
}

function gaussBool(center, x, a,b){
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

function uniform(min,max){
	return Math.random() * (max - min) + min;
}

function bernoulliAndbinom(n, p){
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


function geometrique(n,p,q){
	// Probabilité d'obtenir dans une succession de k épreuves de Bernoulli, k – 1 échecs suivis d'un succès. 
	// Les épreuves sont indépendantes, cette probabilité est de qk – 1p.
	return Math.pow(q,  n-1)*p;
}

function Poisson(n,m){
	// Probabilité d'avoir n évènements distribués selon une loi de Poisson de paramètre m
	return Math.pow(exp(1), -m)*(Math.pow(m,n)/factoriel(n));
	
}

function logarithme(p,k){
	// Loi de probabilité discrète, dérivée du développement de Taylor 
	result = Math.pow(p,k)/k;
	result = result*(-1/Math.log(1-p));

}