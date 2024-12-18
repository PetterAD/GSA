
//NAVIGATION

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu open/close
menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.hidden = isExpanded ? true : false;
  navMenu.setAttribute('aria-hidden', isExpanded);
});


/* // Navbar show on scroll up (you can tweak this logic further)
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Hide navbar when scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Show navbar when scrolling up
    navbar.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
}); */