const hero = document.querySelector('.hero');
const images = [
  'images/images1.jpeg',
  'images/images2.jpeg',
  'images/images3.jpeg',
  'images/images4.jpeg',
  'images/images5.jpeg',
  'images/images6.jpeg'
];
let current = 0;

// Preload images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function setHeroBg(index) {
  hero.style.backgroundImage = `url('${images[index]}')`;
}

setHeroBg(current);

setInterval(() => {
  current = (current + 1) % images.length;
  hero.classList.add('fade-bg');
  setTimeout(() => {
    setHeroBg(current);
    hero.classList.remove('fade-bg');
  }, 600);
}, 5000);

// Add fade transition class
const style = document.createElement('style');
style.innerHTML = `
  .fade-bg {
    animation: heroFade 0.6s;
  }
  @keyframes heroFade {
    from { opacity: 1; }
    50% { opacity: 0.2; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style); 