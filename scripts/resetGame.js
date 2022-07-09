import createColorOptions from './createColorOptions.js';
import getRandomColorFromOptions from './getRandomColorFromOptions.js';

export default function resetGame() {
  const resetGameButton = document.querySelector('#reset-game');

  resetGameButton.onclick = () => {
    // Reset answer
    const answerElement = document.querySelector('#answer');
    answerElement.innerText = 'Escolha uma cor';

    // Reset color options
    const ballsContainerElement = document.querySelector('#balls-container');
    ballsContainerElement.innerHTML = '';

    // Create new color options
    createColorOptions();
    getRandomColorFromOptions();
  };
}
