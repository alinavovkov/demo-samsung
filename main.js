// Initialize GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const firstSlide = document.querySelector('.first-slide');
    const firstContent = firstSlide.querySelector('.content');
    const secondContent = document.querySelector('.main-content:not(.first-slide)');
    const contentRight = document.querySelector('.content-right');
    
    // Set initial states
    gsap.set(secondContent, {
        autoAlpha: 0
    });
    
    gsap.set(contentRight, {
        autoAlpha: 0,
        width: 0
    });

    // Create master timeline
    const masterTl = gsap.timeline({
        paused: true,
        defaults: {
            duration: 1,
            ease: "power2.inOut"
        }
    });

    // Build animation sequence
    masterTl
        // First slide content moves to right
        .to(firstContent, {
            x: '870px', // Width of content-right
            duration: 1
        })
        // Fade in second content
        .to(secondContent, {
            autoAlpha: 1,
            duration: 0.5
        }, "-=0.5")
        // Expand right content
        .to(contentRight, {
            autoAlpha: 1,
            width: '870px',
            duration: 0.8
        }, "-=0.5");

    // Navigation controls
    const navMenu = document.querySelector('.content-nav-menu');
    const leftArrow = navMenu?.querySelector('img:first-child');
    const rightArrow = navMenu?.querySelector('img:last-child');
    const slideCounter = navMenu?.querySelector('span');

    // Add click events
    leftArrow?.addEventListener('click', () => {
        if (masterTl.progress() === 1) {
            masterTl.reverse();
            updateCounter(1);
        }
    });

    rightArrow?.addEventListener('click', () => {
        if (masterTl.progress() === 0) {
            masterTl.play();
            updateCounter(5);
        }
    });

    // Counter update function
    function updateCounter(slideNumber) {
        if (slideCounter) {
            slideCounter.textContent = `${slideNumber}/5`;
        }
    }

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && masterTl.progress() === 0) {
            masterTl.play();
            updateCounter(5);
        } else if (e.key === 'ArrowLeft' && masterTl.progress() === 1) {
            masterTl.reverse();
            updateCounter(1);
        }
    });
});