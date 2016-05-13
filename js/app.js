
$(document).ready(function(){
	/*-- set a counter --*/
	var counter = 0;
	var answer = '';
	var input = '';
	var diff = '';


	/*--- a function for creating a new game *///
	function newGame() {
		/*-- sets a random number for the game --*/
		answer = Math.floor((Math.random() * 100) +1);
		/*-- sets counter to zero --*/
		counter = 0;
		diff = '';
		input = '';
		$('#count').text(counter);
		$('#guessList').empty();
		console.log(answer);
	}

	/* -- a function that clears input --*/
	function clearThis() {
		document.getElementById('userGuess').value = "";
	}

	/*-- a function that puts the guess in the list --*/
	function addGuess(guess) {
		$('#guessList').append('<li>'+guess+'</li>');
	}

	/*--- start a new game on load ---*/
	newGame();
	
	/*-- restart game when you select New Game --*/
	$('.new').on('click',function() {
		newGame();
	});

	/*--- Guessing mechanism ---*/
	$('#guessButton').on('click',function(){
		var guesstxt = document.getElementById('userGuess');
		var guessVal = guesstxt.value;
		counter ++;
		$('#count').text(counter);
		/*-- sets guess requirement to be an integer between 1 and 100 --*/
		if (+guessVal > 0 && +guessVal < 101 && +guessVal%1==0) {
			/** if the user has already guessed something this round --*/
			var guess = +guessVal;
			var dif = Math.abs(answer-guess);
			if (guess == answer) {
				$('#feedback').text('Congrats, you won!  Click New Game to play again.');
			}else if (+input) {
				/*-- Input if not first guess --*/
				var inputDif = Math.abs(answer-input);
				if (inputDif > dif && dif <=3) {
					/*hotter*/
					$('#feedback').text('Hotter and RED HOT');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}else if (inputDif < dif && dif <=3) {
					/*colder*/
					$('#feedback').text('Colder but still RED HOT');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}else if (inputDif > dif && dif <= 15){
					/* hotter */
					$('#feedback').text('Hotter and HOT');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}else if (inputDif < dif && dif <= 15) {
					/*colder*/
					$('#feedback').text('Colder but still HOT');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}else if (inputDif > dif && dif > 15) {
					/*hotter*/
					$('#feedback').text('Hotter but still COLD');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}else if (inputDif < dif && dif > 15) {
					/*colder*/
					$('#feedback').text('Colder and still COLD');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}
			}else {
				/*-- if its the first guess --*/
				if (dif <= 3) {
					$('#feedback').text('RED HOT!!!!');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();

				}else if (dif <= 15) {
					$('#feedback').text('Hot!');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}else{
					$('#feedback').text('Cold.');
					input = guess;
					diff = dif;
					addGuess(guess);
					clearThis();
				}
			}
		}else {
			$('#feedback').text('Please enter a number between 1 and 100');
		}
	});




	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


