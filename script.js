document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    // Return if the carousel elements don't exist to prevent errors
    if (!carouselSlide || !prevBtn || !nextBtn || carouselImages.length === 0) {
        return;
    }

    let counter = 0;
    let size = carouselSlide.clientWidth; // Get width of the container

    function updateSlide() {
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // --- Create reusable functions for navigation ---
    function goToNext() {
        if (counter >= carouselImages.length - 1) return; // Don't go past the last image
        counter++;
        updateSlide();
    }

    function goToPrev() {
        if (counter <= 0) return; // Don't go before the first image
        counter--;
        updateSlide();
    }

    // --- Update event listeners for buttons ---
    nextBtn.addEventListener('click', goToNext);
    prevBtn.addEventListener('click', goToPrev);

    // --- NEW: Add keyboard (arrow key) navigation ---
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            goToNext();
        } else if (event.key === 'ArrowLeft') {
            goToPrev();
        }
    });

    // --- Automatic slide interval ---
    setInterval(() => {
        if (counter >= carouselImages.length - 1) {
            counter = -1; // Reset to go to the first image on next increment
        }
        counter++;
        updateSlide();
    }, 5000);

    // --- Handle window resize ---
    window.addEventListener('resize', () => {
        size = carouselSlide.clientWidth; // Recalculate size on resize
        carouselSlide.style.transition = "none"; // Disable transition during resize
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // --- tsParticles configuration ---
    tsParticles.load("tsparticles", {
        background: {
            color: {
                value: "#000000"
            }
        },
        particles: {
            color: { value: "#ffffff" },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5 },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: { min: 1, max: 5 } },
        }
    });
});
