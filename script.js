// Toggle Menu for Hamburger
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth Scroll for Navigation
const scrollLinks = document.querySelectorAll('.nav-links a');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80, // Adjust for fixed navbar
      behavior: 'smooth'
    });

    // Close the hamburger menu after clicking on a link
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
  });
});

// Play Audio Function
function playAudio() {
  const audio = document.getElementById('audio');
  audio.play();
}