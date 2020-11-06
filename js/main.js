/*----- constants -----*/
const game = {
  title: 'Guess the Number!',
};

/*----- app's state -----*/
game.guess = 0;

game.getBigNum = function() {
  let bigNum = 100;
  return bigNum;
};

game.getSmallNum = function() {
  let smallNum = 1;
  return smallNum;
};

game.play = function() {
  let bigNum = this.getBigNum();
  let smallNum = this.getSmallNum();
  this.secretNum = Math.floor(Math.random() *
    (bigNum - smallNum + 1)) + smallNum;
  console.log(this.secretNum);
};

game.secretNum = null;
game.guess = 0;
game.prevGuesses = [];

/*----- cached element references -----*/
const formEl = document.getElementById('form');
const messageEl = document.getElementById('message');
const guessSubEl = document.getElementById('guess');

/*----- event listeners -----*/
formEl.addEventListener('submit', function(evt) {
  evt.preventDefault();
  game.guess = parseInt(guessSubEl.value)
  takeTurn();
  render();
});

/*----- functions -----*/
game.play();

function takeTurn() {
  game.prevGuesses.push(game.guess);
  console.log(game.prevGuesses);
}

function render() {
  if (game.guess === game.secretNum) {
    message.textContent = `Congrats! You guessed the number in ${game.prevGuesses.length} guesses!`;
  }
}