const background = document.querySelector('.background-carousel');

const images = [
  'images/image1.jpeg',
  'images/image2.jpeg',
  'images/image3.jpeg',
  'images/image4.jpeg',
  'images/image5.jpeg',
  'images/image6.jpeg'
];

let index = 0;

function changeBackground() {
  background.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

window.addEventListener('load', () => {
  changeBackground();
  setInterval(changeBackground, 30000); // Change every 30 seconds
});