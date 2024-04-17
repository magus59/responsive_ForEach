// Exo 1

function nbrePair(x){
	if(x % 2 === 0){
  	console.log(x + " est un nombre pair !")
  }
  else{
  	console.log(x + " n'est pas un nombre pair !")
  }
}

nbrePair(38)
nbrePair(5)

// Exo 2

var tableauNombres = [7, 54, 93, 2, -45]
var autreTableauNombres = [84, 6, 13, -71, 100]

function sommeElementsTableau(tableau){
	var somme = 0;
	for(var i = 0; i < tableau.length; i++){
  	somme = somme + tableau[i]
  }
  return somme
}

console.log(sommeElementsTableau(tableauNombres))
console.log(sommeElementsTableau(autreTableauNombres))