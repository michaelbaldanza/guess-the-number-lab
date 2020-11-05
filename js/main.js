const game = {
  title: 'Guess the Number!',
  getBigNum: function() {
    let bigNum = 100;
    return bigNum;
  },
  getSmallNum: function() {
    let smallNum = 1;
    return smallNum;
  },
  secretNum: null,
  prevGuesses: [],
  play: function() {
    let bigNum = this.getBigNum();
    let smallNum = this.getSmallNum();
    this.secretNum = Math.floor(Math.random() *
      (bigNum - smallNum + 1)) + smallNum;
    console.log(this.secretNum);
  },
};

game.play();

const form = document.getElementById('form');
const message = document.getElementById('message');
const guess = document.getElementById('guess');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  showMessage();
});

function showMessage() {
  let newText = guess.value;
  message.textContent = newText;
}