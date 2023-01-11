'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessageDOM = function (messageString) {
  document.querySelector(`.message`).textContent = messageString;
};

const displayScoreDOM = function (scoreString) {
  document.querySelector(`.score`).textContent = scoreString;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessageDOM(`❌ No number Entered`);

    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessageDOM(guess < secretNumber ? `📉 Too Low` : `📈 Too High`);
      score--;
      displayScoreDOM(score);
    } else {
      //   document.querySelector(`.message`).textContent = `😭 you lost the game`;
      displayMessageDOM(`😭 you lost the game`);
      displayScoreDOM(0);
      //   document.querySelector(`.score`).textContent = 0;
    }

    // When player wins
  } else if (guess === secretNumber) {
    displayMessageDOM(`✅ Correct`);

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = '#60b347';

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }
});

//Play again button
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  console.log(secretNumber);

  document.querySelector(`body`).style.backgroundColor = '#212121';

  document.querySelector(`.number`).style.width = `15rem`;

  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`.guess`).value = ``;

  displayMessageDOM(`Start Guessing...`);

  displayScoreDOM(score);
});

// Home button
document.querySelector(`.home`).addEventListener(`click`, function () {
  window.location = 'index.html';
});
