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
document.addEventListener("DOMContentLoaded", () => {
    // 1. The Zoom-Through Loader Logic
    const loader = document.getElementById('zoom-loader');
    
    // Wait 1.5 seconds so they see the text, then trigger the zoom
    setTimeout(() => {
        loader.classList.add('zoom-active');
        
        // Wait 2.5 seconds for the animation to completely finish, then remove the div so they can click the website
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2500); 
    }, 1500);

    // 2. The Scroll Reveal Logic (Keep your existing observer code below)
    const slides = document.querySelectorAll('.slide');
    const observerOptions = { threshold: 0.2 };
    const slideObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    slides.forEach(slide => { slideObserver.observe(slide); });
});
