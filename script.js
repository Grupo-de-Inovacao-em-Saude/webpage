// Slider Functionality
let slideIndex = 1;
let slideInterval;

function plusSlides(n) {
    clearInterval(slideInterval); // Stop auto-slide on manual interaction
    showSlides(slideIndex += n);
    startAutoSlide(); // Restart auto-slide
}

function currentSlide(n) {
    clearInterval(slideInterval); // Stop auto-slide on manual interaction
    showSlides(slideIndex = n);
    startAutoSlide(); // Restart auto-slide
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("slide-active");
    dots[slideIndex - 1].classList.add("active");
}

function startAutoSlide() {
    slideInterval = setInterval(() => plusSlides(1), 5000); // Auto-slide every 5 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    startAutoSlide();
});

// Scroll Progress Bar (Placeholder - Add your original implementation if available)
function updateProgressBar() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar-indicator").style.width = scrolled + "%";
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
});

// Animation Trigger on Scroll
function handleAnimations() {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top >= 0 && rect.top < windowHeight * 0.75) {
            element.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', handleAnimations);
window.addEventListener('load', handleAnimations);
