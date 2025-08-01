window.addEventListener('load', () => {
  document.querySelector('.hero-content p').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.hero-content h1').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.hero-content .b1').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.hero-content .b2').classList.add('show');
});


document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("request").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });





    const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const logo = document.getElementById('logo');

// Set initial theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  icon.classList.replace('fa-sun', 'fa-moon');
  logo.src = 'images/aumtech-light.jpg';
} else {
  logo.src = 'images/aumtech-dark.jpg';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');

  icon.classList.replace(isLight ? 'fa-sun' : 'fa-moon', isLight ? 'fa-moon' : 'fa-sun');
  logo.src = isLight ? 'images/aumtech-light.jpg' : 'images/aumtech-dark.jpg';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});




