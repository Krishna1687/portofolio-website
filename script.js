// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'UI/UX Designer', 'Mobile Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Scroll Reveal Animation
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero-text h3, .hero-text h1, .heading, .about-text h3', { origin: 'left' });
ScrollReveal().reveal('.hero-text p, .about-text p', { origin: 'right' });
ScrollReveal().reveal('.hero-image, .about-image, .service-box, .portfolio-box', { origin: 'bottom' });

// Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="number"]').value;
    const subject = form.querySelectorAll('input[type="text"]')[1].value;
    const message = form.querySelector('textarea').value;
    
    // Here you would typically send the data to a server
    console.log({ name, email, phone, subject, message });
    
    // Show success message
    alert('Message sent successfully!');
    form.reset();
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});