document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.querySelector('.inicio-container');
    const iniciarSesionBtn = document.getElementById('iniciar-sesion-btn');
    const registrarseLink = document.querySelector('a[href="registro.html"]'); // Selector para el enlace de registro
    const indexLink = document.querySelector('a[href="index.html"]'); // Selector para el enlace de index.html

    // Fade in al cargar
    setTimeout(() => {
        inicioContainer.style.opacity = 1;
        inicioContainer.style.transform = 'translateY(0)';
    }, 10);

    // Función genérica para aplicar fade out y redireccionar
    function fadeOutAndRedirect(url) {
        inicioContainer.style.opacity = 0;
        inicioContainer.style.transform = 'translateY(20px)';
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }

    // Evento para el botón "Iniciar Sesión"
    iniciarSesionBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el envío del formulario por ahora
        fadeOutAndRedirect('index.html'); // Redirecciona a index.html (o la página que desees)
    });

    // Evento para el enlace "Regístrate"
    registrarseLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutAndRedirect('registro.html'); // Redirecciona a registro.html
    });

    // Evento para el enlace "index.html"
    indexLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutAndRedirect('index.html'); // Redirecciona a index.html
    });
});

iniciarSesionBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('user', JSON.stringify({ token: data.token }));
            window.location.href = 'index.html';
        } else {
            alert('Error al iniciar sesión.');
        }
    });
});