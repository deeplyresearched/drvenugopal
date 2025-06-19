
document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let counter = 0;
    let size = carouselImages[0].clientWidth;

    function updateSlide() {
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        counter++;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        updateSlide();
    });

    setInterval(() => {
        if (counter >= carouselImages.length - 1) counter = -1;
        counter++;
        updateSlide();
    }, 5000);

    window.addEventListener('resize', () => {
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

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
