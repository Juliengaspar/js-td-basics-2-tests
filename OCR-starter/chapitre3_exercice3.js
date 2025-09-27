// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.
let hours = parseInt (prompt("entrez une valeurs entre [0, 24]"));
let minutes = parseInt (prompt("entrez une valeurs entre [0, 60]"));
let seconde = parseInt (prompt("entrez une valeurs entre [0, 60]"));
if ((seconde>60) || (minutes>60) || (hours>24)){
    console.log("score invalide")

}else {
    //seconde = seconde+1

    if (seconde === 59) {
        seconde = 0;
    }
    if (minutes === 59){
        minutes = 0;
    }
    if (hours === 23){
        hours = 0;
    }
    console.log(typeof hours);
    console.log(typeof minutes);
    console.log(typeof seconde);
    console.log(`${hours} : ${minutes} : ${seconde}`);
}

