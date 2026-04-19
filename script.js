// Function to handle scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');

    // Setup the Intersection Observer
    // This watches the screen and triggers animations when a section scrolls into view
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const slideObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'in-view' class to trigger CSS transitions and animations
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Attach observer to all sections
    slides.forEach(slide => {
        slideObserver.observe(slide);
    });
});
