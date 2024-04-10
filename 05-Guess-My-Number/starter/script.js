'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.number').textContent);

// console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = 14;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number guessed!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!!!';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High!!!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loser! Try Again!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low!!!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loser! Try Again!';
    }
  }
});
