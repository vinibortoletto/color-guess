import generateRandomColor from './generateRandomColor.js';

export default function createColorOptions() {
  const ballsContainer = document.querySelector('#balls-container');

  for (let i = 0; i < 6; i += 1) {
    const ballElement = document.createElement('div');
    ballElement.classList = 'ball';
    ballElement.style.backgroundColor = generateRandomColor();

    ballsContainer.appendChild(ballElement);
  }
}
