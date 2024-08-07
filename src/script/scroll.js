document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // Scroll down
            header.classList.add('hidden');
        } else {
            // Scroll up
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});
