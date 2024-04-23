alert("selamat datang di portofolio saya")
// Script for animations (using Anime.js)
const headerText = document.querySelector('.animated-text');

anime({
  targets: headerText,
  translateX: [100, 0], // Horizontal text entrance animation
  opacity: [0, 1], // Text fade-in animation
  duration: 1000, // Adjust animation duration
  easing: 'easeInOutSine' // Adjust animation easing
});

// Script for parallax scrolling
window.addEventListener('scroll', function() {
  const parallaxElements = document.querySelectorAll('.parallax-element');

  parallaxElements.forEach(element => {
    const scrollSpeed = window.scrollY / 5; // Adjust scroll speed for desired effect
    element.style.transform = `translateY(${scrollSpeed}px)`;
  });
});

// Script for hover effects on gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    this.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.5)'; // Add a shadow
  });

  item.addEventListener('mouseout', function() {
    this.style.boxShadow = 'none'; // Remove the shadow
  });
});

// Script for smooth scrolling
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetSection = document.querySelector(this.getAttribute('href'));
    const scrollPosition = targetSection.offsetTop;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  });
});

// Script for progress bar
const progressBar = document.querySelector('.progress-bar');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;

  const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

  progressBar.style.width = `${scrollPercent}%`;
});
 