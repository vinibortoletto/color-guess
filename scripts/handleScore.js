export default function handleScore() {
  const scoreElement = document.querySelector('#score');
  let score = parseInt(scoreElement.innerText);
  score += 3;

  scoreElement.innerText = score;
}
