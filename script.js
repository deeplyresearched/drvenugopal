document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Width of a single image

    // Set initial position (optional, for smooth transitions)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Next button listener
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return; // Stop at last image
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Previous button listener
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return; // Stop at first image
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Optional: Auto-slide
    setInterval(() => {
        if (counter >= carouselImages.length - 1) {
            counter = -1; // Reset to -1 to make the next increment go to 0
        }
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    // Adjust size on window resize (important for responsive carousel)
    window.addEventListener('resize', () => {
        const newSize = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "none"; // Remove transition for instant reposition
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});