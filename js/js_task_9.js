function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('button.change-color');
const spanChangeColor = document.querySelector('span.color');

changeColorBtn.addEventListener('click', e => {
    let color = getRandomHexColor();
    body.style.backgroundColor = color;
    spanChangeColor.textContent = color;
})