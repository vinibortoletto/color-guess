import handleScore from './handleScore.js';

export default function checkColorGuess(e) {
  const answerElement = document.querySelector('#answer');
  const correctColorElement = document.querySelector('#rgb-color');

  if (e.target.style.backgroundColor === correctColorElement.innerText) {
    answerElement.innerText = 'Acertou!';
    handleScore();
  } else {
    answerElement.innerText = 'Errou! Tente novamente!';
  }
}
