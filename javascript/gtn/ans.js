const random = parseInt(Math.random() * 100 + 1);
console.log(random);

const ans = document.querySelector(".guessField");
const submit = document.querySelector(".guessSubmit");
const pre_guess = document.querySelector(".guesses");
const rem_guess = document.querySelector(".lastResult");
const display = document.querySelector(".lowOrHi");
const result_paras = document.querySelector(".resultParas");

const p = document.createElement("p");

let prev_guess = [];
let num_guess = 1;
let play_game = true;

if (play_game) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(ans.value);
    validate_guess(guess);
  });
}

function validate_guess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
    display.innerHTML = "the number you enter is not a numbet";
  } else if (guess < 1) {
    alert("please enter a greater than 1 number");
  } else if (guess > 1) {
    alert("please enter a less than 100 number");
  } else {
    pre_guess.push(guess); //pushing elements in array
    if (num_guess == 11) {
      display_guess(guess);
      display_message(`random number was ${random}`);
      endGame();
    } else {
      display_guess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  if (guess == random) {
    display_message("you guess it right ");
    endGame();
  } else if (guess < random) {
    display_message("you guess is to low ");
  } else if (guess > random) {
    display_message("you guess is to high ");
  }
}


function display_guess(guess) {
  ans.value = "";
  pre_guess.innerHTML += "${guess}";
  pre_guess++;
}
function display_message(message) {}
function endGame() {}
function newGame() {}
