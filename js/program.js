const navToggle = document.querySelector('.nav-toggle input');
const nav = document.querySelector('.navbar-bottom');

navToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});