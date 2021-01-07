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