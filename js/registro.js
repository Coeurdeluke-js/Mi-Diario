document.addEventListener('DOMContentLoaded', function() {
    const registroContainer = document.querySelector('.registro-container');
    const registrarBtn = document.getElementById('registrar-btn');
    const inicioSesionLink = document.querySelector('a[href="inicio.html"]');
    const indexLink = document.querySelector('a[href="index.html"]');

    // Fade in al cargar
    setTimeout(() => {
        registroContainer.classList.add('fade-in'); // Aplicar la clase fade-in
    }, 10);

    // Función genérica para aplicar fade out y redireccionar
    function fadeOutAndRedirect(url) {
        registroContainer.classList.remove('fade-in'); // Remover la clase fade-in
        registroContainer.classList.add('fade-out'); // Aplicar la clase fade-out
        setTimeout(() => {
            registroContainer.style.display = 'none'; // Ocultar el contenedor completamente
            window.location.href = url;
        }, 300);
    }

    // Evento para el botón "Registrar"
    registrarBtn.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutAndRedirect('index.html');
    });

    // Evento para el enlace "Iniciar Sesión"
    inicioSesionLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutAndRedirect('inicio.html');
    });

    // Evento para el enlace "index.html"
    indexLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutAndRedirect('index.html');
    });
});

registrarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = 'inicio.html';
    });
});