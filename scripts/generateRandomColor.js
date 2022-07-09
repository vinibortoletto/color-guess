export default function generateRandomColor() {
  const randomNumber = () => Math.floor(Math.random() * 255);
  const randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  return randomColor;
}
