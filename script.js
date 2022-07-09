function generateRandomColor() {
  const colorElement = document.querySelector('#rgb-color');
  const randomNumber = () => Math.floor(Math.random() * 255);
  const randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

  colorElement.innerText = randomColor;
}

generateRandomColor();
