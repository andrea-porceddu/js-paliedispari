// -------------------------------------- PRIMO ESERCIZIO ------------------------------------------//
// inserisco parola
// var inputString = prompt('Inserisci una parola');
// console.log(inputString);

// // 1. metodo
// // inverto la stringa di caratteri - split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split (Reversing a String using split())
// //																		split ritorna un array: array = ["p", "a", "r", "o", "l", "a"]
// //                                 - reverse() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// // 																	reverse ritorna l'inverso dell'array: array = ["a", "l", "o", "r", "a", "p"]
// //                                 - join() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// // 																  join ritorna la concatenazione degli elementi all'interno dell'array
// var reverseString = inputString.split('').reverse().join(''); ('' => separatore, ossia nessun separatore)
// console.log(reverseString);

// 2. metodo - provo a fare le stesse operazioni che fanno i metodi split() reverse() e join() o almeno in parte
// l'intenzione è quella di avere una stringa e utilizzarla come se fosse un'array in modo da poter ciclare l'indice della stringa e conoscere la posizione dei singoli caratteri
// es. stringa = 'parola' => indice di p = 0, indice di a = 1 e via dicendo
// per conoscere la posizione dei caratteri della stringa utilizzo charAt(indice)
// var stringMaxLength = inputString.length; // lunghezza massima della stringa
// console.log(stringMaxLength);
// var i = 0; // indice della stringa
// for (i = 0; i < stringMaxLength; i++) {
// 	console.log(inputString.charAt(i) + ' posizione ' + i);
// }

// // modifico il ciclo, scorro la stringa partendo dall'ultimo carattere e creo un un array, successivamente una nuova variabile,  con la stringa al contrario
// var stringMaxLength = inputString.length - 1; // decremento di 1 la lunghezza massima della stringa altrimenti l'elemento con indice 0 dell'array risulta vuoto
// var i;
// var reverseArray = [];
// var reverseString;
// for (i = stringMaxLength; i >= 0; i--) {
// 	reverseArray.push(inputString.charAt(i));
// 	// console.log(i);
// }
// reverseString = reverseArray.join('') // riutilizzo join('') per concatenare i caratteri all'interno dell'array reverseStringArray
// console.log(reverseString);


// // controllo se palindroma
// if (inputString === reverseString) {
// 	console.log('La parola inserita è palindroma');
// } else {
// 	console.log('La parola inserita non è palindroma');
// }

var firstExerciseBtn = document.getElementById('first-exercise-btn');
firstExerciseBtn.addEventListener('click', function() {

	var inputString = prompt('Inseriesci parola');
	document.getElementsByClassName('input-word')[0].innerHTML = inputString;

});

var checkBtn = document.getElementById('check-btn');
checkBtn.addEventListener('click', function() {

	var inputString = document.getElementsByClassName('input-word')[0].textContent;
	var stringMaxLength = inputString.length - 1;
	var i;
	var reverseArray = [];
	var reverseString;
	for (i = stringMaxLength; i >= 0; i--) {
		reverseArray.push(inputString.charAt(i));
	}
	reverseString = reverseArray.join('');

	document.getElementsByClassName('reverse-input-word')[0].innerHTML = reverseString;

	if (inputString === reverseString) {
		alert('è palindromo');
	} else {
		alert('non è palindromo')
	}

});
// -------------------------------------- PRIMO ESERCIZIO ------------------------------------------//

// --------------------------------------SECONDO ESERCIZIO ------------------------------------------//
// var userChoise = parseInt(prompt('Inserisci un numero da 1 a 5'));
// alert('Hai inserito il numero: ' + userChoise);
// if (userChoise < 1 || userChoise > 5) {
// 	alert('Devi inserire un numero compreso tra 1 a 5');
// } else {
// 	var randomMin = 1;
// 	var randomMax = 5;
// 	var randomNumber = Math.floor(Math.random() * (randomMax + 1 - randomMin) + randomMin);
// 	alert('Il calcolatore ha randomizzato il numero: ' + randomNumber);
// 	var sum = userChoise + randomNumber;
// 	if (sum % 2 === 0) {
// 		alert('La somma è: ' + sum + ' pari');
// 	} else {
// 		alert('La somma è: ' + sum + ' dispari');
// 	}
// }

var secondExerciseBtn = document.getElementById('second-exercise-btn');
secondExerciseBtn.addEventListener('click', function() {

	var inputNumber = prompt('Inseriesci numero compreso tra 1 e 5');

	if (inputNumber < 1 || inputNumber > 5) {
		alert('Devi inserire un numero tra 1 e 5');
	} else {
		document.getElementsByClassName('user-choise')[0].innerHTML = inputNumber;
	}

});

function randomNumber(min, max) {
	var calculatorNumber = Math.floor(Math.random() * (max + 1 - min) + min);
	document.getElementsByClassName('calculator-choise')[0].innerHTML = calculatorNumber;
};

var calculatorChoise = document.getElementById('calculator-number-btn');
	calculatorChoise.addEventListener('click', randomNumber(min, max) {
});

function sumNumbers(inputNumber, calculatorNumber) {
	var sum = inputNumber + calculatorNumber;
	return sum;
};

var secondCheckBtn = document.getElementById('second-check-btn');
secondCheckBtn.addEventListener('click', function() {

	if (sum % 2 === 0) {
		alert('La somma è: ' + sum + ' pari');
	} else {
		alert('La somma è: ' + sum + ' dispari');
	}

});

// --------------------------------------SECONDO ESERCIZIO ------------------------------------------//