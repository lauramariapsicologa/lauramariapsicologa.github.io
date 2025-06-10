document.addEventListener('DOMContentLoaded', function() {
    const headerDer = document.querySelector('.header-der');
    const ul = document.querySelector('.header-der ul');

    // Toggle del menú móvil
    headerDer.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const rect = headerDer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            
            // Verificar si el click está en la zona del icono hamburguesa
            if (clickX > rect.width - 40) {
                headerDer.classList.toggle('active');
                ul.classList.toggle('active');
            }
        }
    });

    // Cerrar menú al hacer click en un enlace
    const links = document.querySelectorAll('.header-der a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                headerDer.classList.remove('active');
                ul.classList.remove('active');
            }
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !headerDer.contains(e.target)) {
            headerDer.classList.remove('active');
            ul.classList.remove('active');
        }
    });

    // Cerrar menú al redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            headerDer.classList.remove('active');
            ul.classList.remove('active');
        }
    });
});