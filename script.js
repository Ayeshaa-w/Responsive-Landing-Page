// Play Audio
function playAudio() {
  const audio = document.getElementById('audio');
  audio.play();
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.backgroundColor = window.scrollY > 50 ? '#4a201d' : 'rgba(0, 0, 0, 0.8)';
});