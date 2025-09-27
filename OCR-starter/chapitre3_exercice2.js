// Baccalauréat

/*
1. Stockez la moyenne du candidat (un nombre) dans une constante.
2. Écrivez un test qui affiche dans la console :
   - "Le candidat est recalé" si la moyenne est inférieure à 10.
   - "Le candidat est reçu" si la moyenne est entre 10 et 12.
   - "Le candidat est reçu avec mention" si la moyenne est supérieure ou égale à 12.
*/
const candidateAverage = prompt("entrez une valeur entre 0 et 20")
//const candidateAverage = 10;
/*
if (candidateAverage<10){
    console.log("Le candidat est recalé");
}else if ((candidateAverage>=10)&&(candidateAverage<12)){
    console.log("Le candidat est reçu")
}else {
    console.log("Le candidat est reçu avec mention")
}

 */

// Exemple : si la moyenne du candidat est de 11, le programme devrait afficher "Le candidat est reçu."

// N'oubliez pas de tester votre programme avec différentes moyennes pour couvrir tous les cas de figure.
switch (true) {
    case candidateAverage<10 :
        console.log("Le candidat est recalé");
        break;
    case candidateAverage>=10 && candidateAverage<12:
        console.log("Le candidat est reçu")
        break;
        case candidateAverage>=12 && candidateAverage<=20:
        console.log("Le candidat est reçu avec mention")
        break;
    default:
        console.log("score invalid");

}