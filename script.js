// Contact Form Submission
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you ${name}! I will respond to ${email} soon.`);
    form.reset();
});
// Fade in About Section on scroll
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(sectionTop < screenHeight - 100){
        aboutSection.classList.add('visible');
    }
});
