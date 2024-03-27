'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.number').textContent);

// console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = 14;

// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let counter = 0;
let score = Number(document.querySelector('.score').textContent);
console.log(typeof score);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number guessed!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!!!';
    document.querySelector('.highscore').textContent = score;
  } else if (score > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!!!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loser! Try Again!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loser! Try Again!';
    }
  }
});
