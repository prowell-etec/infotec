// script.js

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const themeToggle = document.querySelector('#theme-toggle');
  const themeIcon = document.querySelector('#theme-toggle i');

  // Alternar o menu no mobile
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Alternar entre Light Mode e Dark Mode
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    } else {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  });
});
