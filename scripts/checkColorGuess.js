export default function checkColorGuess(e) {
  const answerElement = document.querySelector('#answer');
  const correctColorElement = document.querySelector('#rgb-color');

  if (e.target.style.backgroundColor === correctColorElement.innerText) {
    answerElement.innerText = 'Acertou!';
  } else {
    answerElement.innerText = 'Errou! Tente novamente!';
  }
}
