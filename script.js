const images = [
    'travel_pics/africa.PNG',
    'travel_pics/orient.PNG',
    'travel_pics/london.PNG',
    'travel_pics/usa.PNG',
    'travel_pics/asie.PNG',
    'travel_pics/airplane.PNG'
];

let index = 0;
const hero = document.getElementsByClassName('hero')[0];

function changebackground() {
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${images[index]})`;
    /*hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundSize = "cover";*/

    index = (index + 1) % images.length;
}

changebackground();
setInterval(changebackground, 5000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));

let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    currentTestimonial = (index + testimonialCards.length) % testimonialCards.length;
    testimonialCards[currentTestimonial].classList.add('active');
}

function changeTestimonial(step) {
    showTestimonial(currentTestimonial + step);
    resetTimer();
}

let testimonialTimer = setInterval(() => changeTestimonial(1), 10000);

function resetTimer() {
    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(() => changeTestimonial(1), 10000);
}

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
})

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nom = document.querySelector('input[placeholder="Votre Nom"]').value;
    const contact = document.querySelector('input[placeholder="Votre Contact"]').value;
    const email = document.querySelector('input[placeholder="Votre Email"]').value;
    const projet = document.querySelector('textarea').value;

    const message = `Bonjour Gonga Voyages! %0A%0A` + `Nom : ${nom}%0A` + `Contact : ${contact}%0A` + `E-mail : ${email}%0A` `${projet}`;

    const telephone = "237697139458";

    window.open(`https://wa.me/${telephone}?text=${message}`, '_blank');
});
