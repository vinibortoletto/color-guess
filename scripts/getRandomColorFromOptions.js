export default function getRandomColorFromOptions() {
  const balls = document.querySelectorAll('.ball');
  const randomIndex = Math.floor(Math.random() * 6);
  const colorToGuess = document.querySelector('#rgb-color');
  colorToGuess.innerText = balls[randomIndex].style.backgroundColor;
}
