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