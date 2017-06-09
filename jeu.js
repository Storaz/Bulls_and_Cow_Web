var nombre_1,nombre_2,nombre_3,nombre_4,choix_joueur_index;
//Choix possible au départ 
var choix_possible =  [1,2,3,4,5,6,7,8,9];
var choix_possible_index = 9;
var essais = 8;

function start(){
	document.getElementById('comparer').innerHTML = ('Comparer (Nombre d\'essais restants :'+essais+')');
	nombre_1 = random_number();
	nombre_2 = random_number();
	nombre_3 = random_number();
	nombre_4 = random_number();
	choix_joueur_index = 0;
	console.log('Nombres à trouver',nombre_1,nombre_2,nombre_3,nombre_4); //Les nombres à trouver sont affichés dans la console
}

function random_number(){
	var resultat = 0;
	var resultat_index = Math.floor(Math.random() * choix_possible_index);//On définit l'index de choix possible
	resultat =choix_possible[resultat_index];//On définit le nombre aleatoire 
	choix_possible.splice(resultat_index,1);//On supprime le nombre retenu de la liste des possibilités
	choix_possible_index = choix_possible_index-1;
	//console.log('choix possible',choix_possible);
	//console.log('resultat',resultat);
	//console.log('resultat_index',resultat_index);
	//console.log('choix_possible_index',choix_possible_index);
	return resultat;
}

function choix_joueur(){
	//Récupération des choix
	var choix_1 = document.getElementById('choix_1').value; 
	var choix_2 = document.getElementById('choix_2').value;
	var choix_3 = document.getElementById('choix_3').value;
	var choix_4 = document.getElementById('choix_4').value;
	var bulls = 0;
	var cows = 0;

	console.log('choix_joueur',choix_1,choix_2,choix_3,choix_4);

	//Comparaison des nombres
	//Test choix 1

	if (nombre_1 == choix_1){
		bulls ++;
	}

	if (choix_1 == nombre_2) {
		cows ++;
	}

	if (choix_1 == nombre_3) {
		cows ++;
	}

	if (choix_1 == nombre_4) {
		cows ++;
	}

	//Test choix 2
	if (nombre_2 == choix_2){
		bulls ++;
	}

	if (choix_2 == nombre_1) {
		cows ++;
	}

	if (choix_2 == nombre_3) {
		cows ++;
	}

	if (choix_2 == nombre_4) {
		cows ++;
	}

	//Text choix 3
	if (nombre_3 == choix_3){
		bulls ++;
	}

	if (choix_3 == nombre_1) {
		cows ++;
	}

	if (choix_3 == nombre_2) {
		cows ++;
	}

	if (choix_3 == nombre_4) {
		cows ++;
	}

	//Test choix 4
	if (nombre_4 == choix_4){
		bulls ++;
	}

	if (choix_4 == nombre_1) {
		cows ++;
	}

	if (choix_4 == nombre_2) {
		cows ++;
	}

	if (choix_4 == nombre_3) {
		cows ++;
	}

	if (bulls == 4){
		comparer.disabled = true;// On désactive le boutton comparer ainsi si la personne n'appuye pas sur ok, elle pourra voir ses différents résultats sans pouvoir continuer à jouer
		//alert("Vous avez gagné !!");
		if (confirm('Vous avez gagné !!')){
			window.location.reload(false);
			console.log('Recharger la page');
		}
	}

	//Ajout d'une ligne
	var table_body = document.getElementById("choix").getElementsByTagName("tbody")[0];
    var row = table_body.insertRow(choix_joueur_index);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = choix_1;
    cell2.innerHTML = choix_2;
    cell3.innerHTML = choix_3;
    cell4.innerHTML = choix_4;
    cell5.innerHTML = bulls;
    cell6.innerHTML = cows;
    choix_joueur_index ++;
    essais --;
    document.getElementById('comparer').innerHTML = ('Comparer (Nombre d\'essais restants :'+essais+')');
    if (essais == 0){
    	comparer.disabled = true;	
		//alert("Vous avez perdu !!");
		if (confirm('Vous avez perdu !!')){
			window.location.reload(false);
			console.log('Recharger la page');
		}
	}
}

//Fonction qui modifie la couleur des boutons avec l'id choix
function change_couleur(color){
    var color = document.getElementsByTagName("choix");
    color.style.backgroundColor="#D2691E";
}