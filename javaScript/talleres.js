window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallaxElement = document.getElementById('parallaxImage');
    const container = document.querySelector('.img-movimiento');

    
    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;

    
    if (containerTop < window.innerHeight && containerTop + containerHeight > 0) {
        const speed = 0.8;
        const yPos = scrolled * speed;
        parallaxElement.style.transform = `translateY(${yPos}px)`;
    }
});
