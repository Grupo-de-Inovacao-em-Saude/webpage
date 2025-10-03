// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll Animation Trigger
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top >= 0 && rect.top < windowHeight * 0.75) {
            element.classList.add('in-view');
        }
    });
});
