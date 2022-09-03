'use strict';
// Selecting elements
const player0EL = document.querySelector('.player-0');
const player1EL = document.querySelector('.player-1');
const score0EL = document.querySelector('#score-0');
const score1EL = document.getElementById('score-1');
const current0EL = document.getElementById('current-0');
const current1EL = document.getElementById('current-1');
// const scoreTotalEL0 = document.getElementById('score-0');
// const scoreTotalEL1 = document.getElementById('score-1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
// starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// let scoreHold = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player-active');
  player1EL.classList.toggle('player-active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {

    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. displau dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // 3. check for 1 and switch player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;
      // current0EL.textContent = currentScore;

    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {

  if (playing) {

    // 1 add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    // 2 check if player's score is >=100

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEL.classList.remove('hidden');
      document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
      document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
    } else {
      switchPlayer();
    }
    // finish the game
    // switch to next player

    // document.getElementById(`score-${activePlayer}`).textContent += currentScore;

    // document.getElementById(`current-${activePlayer}`).textContent = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // currentScore = 0;
    // player0EL.classList.toggle('player-active');
    // player1EL.classList.toggle('player-active');
  }
});

const init = function () {
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  scores = [0, 0];
  diceEL.classList.add('hidden');
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  player0EL.classList.remove('player-winner');
  player1EL.classList.remove('player-winner');
  player0EL.classList.add('player-active');
  player1EL.classList.remove('player-active');

};

btnNew.addEventListener('click', init);



