/*Method console
let number = 0;

console.time('Boucle');

for (let i = 0; i < 1e6; i++) {
	number++;
	if (i === 1e3) {
		console.timeLog('Boucle');
	}
}
console.timeEnd('Boucle');

console.log(number);
*/
/*
Marion souhaite fêter son anniversaire dans une salle des fêtes pouvant contenir 50 personnes.

Vous allez devoir, à partir du code source ci-après :

1. Vérifiez que le nombre d’invités n’excède pas 50 personnes

2. Dans le cas où le nombre de personnes invitées dépasse la capacité de la salle, affichez “Le nombre d’invités est trop important”

3. Affichez le nombre d’invités dans la console

Supprimez les lignes "// Write your code here instead of this comment" et écrivez votre code à la place.
*/

// 1) Créez une variable pour le nombre max de personnes pouvant être contenues dans la salle ainsi que le nombre d’invités.
const roomCapacityMax = 50;

let guestNumber = 50;

if (guestNumber <= roomCapacityMax) {
	console.log(true);
} else {
	console.log(false);
}

//2)
const message = '“Le nombre d’invités est trop important”';
console.assert(guestsNumber <= roomCapacityMax, { guestsNumber, roomCapacityMax, message });

//3
console.log(guestNumber);
