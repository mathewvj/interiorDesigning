let current = 0;
const testimonials = document.querySelectorAll('.testimonial');

function getOffset() {
    return window.innerWidth > 768 ? 400 : 0; // Increased offset for desktop
}

function update() {
    const offset = getOffset();
    const length = testimonials.length;
    const prevIndex = (current - 1 + length) % length;
    const nextIndex = (current + 1) % length;

    testimonials.forEach((test, i) => {
        if (offset === 0) {
            // Mobile: show only one, centered
            if (i === current) {
                test.style.transform = `translateX(-50%) scale(1)`;
                test.style.opacity = 1;
                test.style.zIndex = 2;
            } else {
                test.style.opacity = 0;
                test.style.zIndex = 0;
            }
        } else {
            // Desktop: show three, middle larger, with gaps
            if (i === current) {
                test.style.transform = `translateX(-50%) scale(1.2)`;
                test.style.opacity = 1;
                test.style.zIndex = 2;
            } else if (i === prevIndex) {
                test.style.transform = `translateX(calc(-50% - ${offset}px)) scale(0.8)`;
                test.style.opacity = 0.8;
                test.style.zIndex = 1;
            } else if (i === nextIndex) {
                test.style.transform = `translateX(calc(-50% + ${offset}px)) scale(0.8)`;
                test.style.opacity = 0.8;
                test.style.zIndex = 1;
            } else {
                test.style.opacity = 0;
                test.style.zIndex = 0;
            }
        }
    });
}

function prevTestimonial() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    update();
}

function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    update();
}

// Initial setup
update();
window.addEventListener('resize', update);

// Auto-scroll every 5 seconds
setInterval(nextTestimonial, 5000);
