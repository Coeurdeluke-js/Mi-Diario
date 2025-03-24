document.addEventListener('DOMContentLoaded', function() {
    const dateSelector = document.getElementById('date-selector');
    const viewEntriesButton = document.getElementById('view-entries');
    const entriesContainer = document.getElementById('entries-container');
    const calendarToggle = document.getElementById('calendar-toggle');
    const calendarTitle = document.getElementById('calendar-title');
    const calendarContent = document.getElementById('calendar-content');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.getElementById('main-content');
    const footerMenuToggle = document.getElementById('footer-menu-toggle');
    const footerMenu = document.getElementById('footer-menu');
    const pageFooter = document.getElementById('page-footer');

    // Mostrar entradas del día actual al cargar la página
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10); // formato YYYY-MM-DD
    dateSelector.value = formattedDate;
    displayEntries(formattedDate, false); // Sin efecto fade al cargar inicialmente

    // Expandir el header al cargar la página
    mainHeader.classList.add('expanded');
    mainContent.classList.add('shifted');
    menuToggle.classList.remove('fa-forward');
    menuToggle.classList.add('fa-backward');

    // Función para ajustar la altura del header y el footer inicialmente
    function adjustInitialLayout() {
        const mainContentRect = mainContent.getBoundingClientRect();
        const pageFooterRect = pageFooter.getBoundingClientRect();
    
        // Establecer una altura mínima para el contenido principal
        mainContent.style.minHeight = `${window.innerHeight - mainContentRect.top - pageFooterRect.height}px`;
    
        // Establecer la posición del footer
        pageFooter.style.position = 'fixed';
        pageFooter.style.bottom = '0';
        pageFooter.style.left = '0';
        pageFooter.style.right = '0';
    }
        
    // Función para mostrar las entradas con fade in escalonado
    function displayEntries(date, withFadeEffect = true) {
        const selectedEntries = entries[date];
        
        if (!selectedEntries || selectedEntries.length === 0) {
            entriesContainer.innerHTML = '<p>No hay entradas para esta fecha.</p>';
            return;
        }
        
        // Preparar las entradas nuevas
        entriesContainer.innerHTML = selectedEntries.map(entry => `
            <article>
                <h2>${entry.title}</h2>
                <p>${entry.content}</p>
                <p class="date"><i class="far fa-calendar-alt"></i> ${entry.date}</p>
            </article>
        `).join('');
        
        const articles = document.querySelectorAll('article');
        
        if (withFadeEffect) {
            // Aplicar animación escalonada de entrada
            articles.forEach((article, index) => {
                setTimeout(() => {
                    article.classList.add('show');
                }, 300 * index);
            });
        } else {
            // Sin efecto, mostrar todas inmediatamente
            articles.forEach(article => article.classList.add('show'));
        }
        
        // Alinear el header con la primera entrada
        alignHeaderWithFirstEntry();
    }

// Modified function to align header with first entry
function alignHeaderWithFirstEntry() {
    const firstArticle = document.querySelector('article');
    
    if (firstArticle) {
        const firstArticleRect = firstArticle.getBoundingClientRect();
        // Set the top position to match the first article's top position
        mainHeader.style.top = `${firstArticleRect.top}px`;
    } else {
        // Default position if no entries
        mainHeader.style.top = '100px';
    }
    
    // Also adjust the main content's bottom padding based on footer height
    const footerHeight = pageFooter.offsetHeight;
    mainContent.style.paddingBottom = `${footerHeight + 20}px`;
}

    // Función para efecto de fade out escalonado inverso
    function fadeOutEntries(callback) {
        const articles = document.querySelectorAll('article');
        
        if (articles.length === 0) {
            if (callback) callback();
            return;
        }
        
        // Empezar desde la última entrada y retroceder
        for (let i = articles.length - 1; i >= 0; i--) {
            setTimeout(() => {
                articles[i].classList.remove('show');
                
                // Cuando la última entrada (primera en desaparecer) termina su animación, ejecutar callback
                if (i === 0) {
                    setTimeout(() => {
                        if (callback) callback();
                    }, 600); // Duración de la transición
                }
            }, 300 * (articles.length - 1 - i));
        }
    }

    // Función para alternar el estado del menú
    function toggleMenu() {
        const isExpanded = mainHeader.classList.toggle('expanded');
        mainContent.classList.toggle('shifted');
        
        // Cambiar el icono según el estado
        if (isExpanded) {
            menuToggle.classList.remove('fa-forward');
            menuToggle.classList.add('fa-backward');
        } else {
            menuToggle.classList.remove('fa-backward');
            menuToggle.classList.add('fa-forward');
        }
    }

    // Evento para el botón de ver entradas
    viewEntriesButton.addEventListener('click', () => {
        const selectedDate = dateSelector.value;
        
        // Efecto de fade out escalonado y luego mostrar nuevas entradas
        fadeOutEntries(() => {
            displayEntries(selectedDate, true);
        });
        
        // En dispositivos móviles, cerrar el menú después de seleccionar
        if (window.innerWidth <= 768) {
            mainHeader.classList.remove('expanded');
        }
    });

    // Evento para mostrar/ocultar el calendario 
    function toggleCalendar() {
        calendarContent.classList.toggle('show');
        calendarToggle.classList.toggle('animate');
    }

    // Asegurando que tanto el icono como el texto permiten desplegar el calendario
    calendarToggle.addEventListener('click', toggleCalendar);
    calendarTitle.addEventListener('click', toggleCalendar);

    // Evento para el botón de menú integrado en el header
    menuToggle.addEventListener('click', toggleMenu);

    // Evento para el botón de menú en la versión móvil
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mainHeader.classList.toggle('expanded');
        });
    }

    // Funcionalidad para el menú del footer
    footerMenuToggle.addEventListener('click', () => {
        footerMenu.classList.toggle('show');
    });

    // Cerrar menús al hacer clic fuera de ellos (solo para footer y versión móvil)
    document.addEventListener('click', (e) => {
        // No cerrar el header en versión desktop al hacer clic fuera
        if (window.innerWidth <= 768 && 
            !mainHeader.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) && 
            mainHeader.classList.contains('expanded')) {
            mainHeader.classList.remove('expanded');
        }
        
        // Cerrar menú del footer
        if (!footerMenu.contains(e.target) && 
            !footerMenuToggle.contains(e.target) && 
            footerMenu.classList.contains('show')) {
            footerMenu.classList.remove('show');
        }
    });

    // Función para redirigir con fade out
    function redirectWithFadeOut(url) {
        // Primero hacemos fade out del menú de footer
        footerMenu.classList.add('fade-out');
        
        setTimeout(() => {
            footerMenu.classList.remove('show');
            
            // Fade out de los artículos
            fadeOutEntries(() => {
                // Fade out del contenido principal
                mainContent.style.opacity = "0";
                
                // Fade out del header
                mainHeader.style.opacity = "0";
                
                // Fade out del footer
                pageFooter.style.opacity = "0";
                
                // Redirigir después de completar todas las animaciones
                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            });
        }, 300);
    }

    // Añadir evento para los enlaces del menú del footer
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            redirectWithFadeOut(url);
        });
    });

    // Evento de redimensionamiento para ajustar alturas
    window.addEventListener('resize', () => {
        adjustInitialLayout();
        alignHeaderWithFirstEntry();
    });
    
    // Ajustar alturas inicialmente
    adjustInitialLayout();
});