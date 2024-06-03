document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-list');
    const navbar1 = document.querySelector('.h-nav');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('nav-list');
        navbar1.classList.toggle('h-nav');
    });
});

      




const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-list li a');

// Flag to track whether the hamburger is clicked
let isHamburgerClicked = false;

// Function to toggle navbar height and color
function toggleNavbar() {
    if (!isHamburgerClicked) {
        // If hamburger is not clicked, change color on scroll
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = 'white';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.206';
        }
    } else {
        // If hamburger is clicked, set height to 100vh and color to royalblue
        
        navbar.style.backgroundColor = 'royalblue';
    }
}
hamburger.addEventListener('click', function() {
    isHamburgerClicked = !isHamburgerClicked;
    toggleNavbar();
});

// Event listener for scrolling the navbar
window.addEventListener('scroll', function() {
    if (!isHamburgerClicked) {
        // If hamburger is not clicked, change color on scroll
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = 'white';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.206';
        }
    }
});


window.addEventListener('scroll', () => {
     const navLinks = document.querySelectorAll('.nav-list li a');
  
 
 
   
 
   
   navLinks.forEach((link) => {
       if (window.scrollY > 1) {
           link.style.color = 'black'; 
       } else {
           link.style.color = 'white';
       }
     });
 });