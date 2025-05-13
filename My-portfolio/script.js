// my javascript here

// scripting for nav bar in mobile phones
const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('main-menu');

    let isOpen= false;
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      isOpen = !isOpen;
      hamburger.innerHTML = isOpen ? '&#10005;' : '&#9776;'; // ✖ or ☰
    });