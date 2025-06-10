function enviarFormulario(e) {
    e.preventDefault();

    // Validación simple
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Limpiar errores anteriores
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (name === '') {
        document.getElementById('nameError').textContent = 'Por favor ingresa tu nombre';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Por favor ingresa tu email';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Por favor ingresa un email válido';
        isValid = false;
    }

    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Por favor ingresa un asunto';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Por favor ingresa tu mensaje';
        isValid = false;
    }

    if (isValid) {
        // Construir el mailto link correctamente
        const mailtoLink = `mailto:anaheralmudi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
        )}`;

        // Abrir el cliente de correo en la misma pestaña para evitar bloqueos en algunos navegadores
        window.location.href = mailtoLink;

        // Opcional: Resetear el formulario
        document.getElementById('contactForm').reset();
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
