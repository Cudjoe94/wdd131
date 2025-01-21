// Toggle Navigation Menu
const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('showing'); // Toggle showing class
});

// Set Current Year and Last Modified Date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Optional enhancement for visual feedback
menuButton.innerHTML = "&#9776;"; // Hamburger icon
