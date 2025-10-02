// Hero Slider Logic
let slideIndex = 1;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-active');
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    slides[slideIndex - 1].classList.add('slide-active');
    dots[slideIndex - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    setInterval(() => changeSlide(1), 6000); // Auto-slide every 6 seconds
});

// Scroll Progress
function updateScrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar-indicator").style.width = scrolled + "%";
}

// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal-item');
function checkVisibility() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 200) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', () => {
    updateScrollIndicator();
    checkVisibility();
});

window.addEventListener('load', checkVisibility);
