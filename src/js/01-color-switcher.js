const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyBackground = document.querySelector('body');
let colorChange = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
  colorChange = setInterval(() => {
    const newColor = getRandomHexColor();
    bodyBackground.style.backgroundColor = newColor;
  }, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
  clearInterval(colorChange);
  buttonStart.disabled = false;
});
