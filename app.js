const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const colorbtn = document.querySelector('.btn');
const bodyback = document.querySelector('.container');

colorbtn.addEventListener('click', () => {
  let hexColor = '#';
  console.log('hey');
  for (let i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
