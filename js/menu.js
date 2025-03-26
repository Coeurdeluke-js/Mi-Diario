document.addEventListener('DOMContentLoaded', function() {
    // DOM Element Selectors
    const elements = {
        dateSelector: document.getElementById('date-selector'),
        viewEntriesButton: document.getElementById('view-entries'),
        entriesContainer: document.getElementById('entries-container'),
        calendarToggle: document.getElementById('calendar-toggle'),
        calendarTitle: document.getElementById('calendar-title'),
        calendarContent: document.getElementById('calendar-content'),
        menuToggle: document.getElementById('menu-toggle'),
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        mainHeader: document.getElementById('main-header'),
        mainContent: document.getElementById('main-content'),
        footerMenuToggle: document.getElementById('footer-menu-toggle'),
        footerMenu: document.getElementById('footer-menu'),
        pageFooter: document.getElementById('page-footer')
    };

    // Utility Functions
    const utils = {
        escapeHTML: function(str) {
            if (typeof str !== 'string') return '';
            return str.replace(/[&<>'"]/g, 
                tag => ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;'
                }[tag] || tag));
        },
        generateUniqueId: function() {
            return 'entry-' + Math.random().toString(36).substr(2, 9);
        }
    };

    // Initialize Page
    function initializePage() {
        const today = new Date();
        const formattedDate = today.toISOString().slice(0, 10);

        elements.dateSelector.value = formattedDate;
        displayEntries(formattedDate, false);

        // Expand header on page load
        elements.mainHeader.classList.add('expanded');
        elements.mainContent.classList.add('shifted');
        elements.menuToggle.classList.remove('fa-forward');
        elements.menuToggle.classList.add('fa-backward');

        adjustInitialLayout();
        setupEventListeners();
    }

    // Layout Adjustment
    function adjustInitialLayout() {
        const mainContentRect = elements.mainContent.getBoundingClientRect();
        const pageFooterRect = elements.pageFooter.getBoundingClientRect();
   
        elements.mainContent.style.minHeight = `${window.innerHeight - mainContentRect.top - pageFooterRect.height}px`;
   
        elements.pageFooter.style.position = 'fixed';
        elements.pageFooter.style.bottom = '0';
        elements.pageFooter.style.left = '0';
        elements.pageFooter.style.right = '0';
       
        setTimeout(alignHeaderWithFirstEntry, 0);
    }

    // Event Listeners Setup
    function setupEventListeners() {
        // Footer Menu Toggle
        elements.footerMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            elements.footerMenu.classList.toggle('show');
        });

        // Global Click to Close Menus
        document.addEventListener('click', (e) => {
            // Mobile Header Close
            if (window.innerWidth <= 768 &&
                !elements.mainHeader.contains(e.target) &&
                !elements.mobileMenuToggle.contains(e.target) &&
                elements.mainHeader.classList.contains('expanded')) {
                elements.mainHeader.classList.remove('expanded');
            }
           
            // Footer Menu Close
            if (!elements.footerMenu.contains(e.target) &&
                !elements.footerMenuToggle.contains(e.target) &&
                elements.footerMenu.classList.contains('show')) {
                elements.footerMenu.classList.remove('show');
            }
        });

        // Menu Links with Fade Out
        const menuLinks = document.querySelectorAll('.menu-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const url = this.getAttribute('href');
                redirectWithFadeOut(url);
            });
        });

        // Resize Event
        window.addEventListener('resize', () => {
            adjustInitialLayout();
            alignHeaderWithFirstEntry();
        });

        // Other existing event listeners can be added here
        setupOtherEventListeners();
    }

    // Other Event Listeners
    function setupOtherEventListeners() {
        // View Entries Button
        elements.viewEntriesButton.addEventListener('click', () => {
            const selectedDate = elements.dateSelector.value;
           
            fadeOutEntries(() => {
                displayEntries(selectedDate, true);
            });
           
            if (window.innerWidth <= 768) {
                elements.mainHeader.classList.remove('expanded');
            }
        });

        // Calendar Toggle
        [elements.calendarToggle, elements.calendarTitle].forEach(el => {
            el.addEventListener('click', toggleCalendar);
        });

        // Menu Toggle
        elements.menuToggle.addEventListener('click', toggleMenu);

        // Mobile Menu Toggle
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.addEventListener('click', () => {
                elements.mainHeader.classList.toggle('expanded');
            });
        }
    }

    // Menu and Calendar Functions
    function toggleMenu() {
        const isExpanded = elements.mainHeader.classList.toggle('expanded');
        elements.mainContent.classList.toggle('shifted');
       
        elements.menuToggle.classList.toggle('fa-forward');
        elements.menuToggle.classList.toggle('fa-backward');
    }

    function toggleCalendar() {
        elements.calendarContent.classList.toggle('show');
        elements.calendarToggle.classList.toggle('animate');
    }

    // Redirection with Fade Out
    function redirectWithFadeOut(url) {
        elements.footerMenu.classList.add('fade-out');
       
        setTimeout(() => {
            elements.footerMenu.classList.remove('show');
           
            fadeOutEntries(() => {
                elements.mainContent.style.opacity = "0";
                elements.mainHeader.style.opacity = "0";
                elements.pageFooter.style.opacity = "0";
               
                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            });
        }, 300);
    }

    // Entry and Header Management Functions
    function displayEntries(date, withFadeEffect = true) {
        // Entry display logic (similar to original code)
        // Placeholder for actual implementation
        console.log(`Displaying entries for ${date}`);
    }

    function fadeOutEntries(callback) {
        // Fade out entries logic
        // Placeholder for actual implementation
        if (callback) callback();
    }

    function alignHeaderWithFirstEntry() {
        // Header alignment logic
        const firstArticle = document.querySelector('article');
       
        if (firstArticle) {
            const firstArticleRect = firstArticle.getBoundingClientRect();
            elements.mainHeader.style.top = `${firstArticleRect.top}px`;
        } else {
            elements.mainHeader.style.top = '100px';
        }
       
        const footerHeight = elements.pageFooter.offsetHeight;
        elements.mainContent.style.paddingBottom = `${footerHeight + 20}px`;
    }

    // Initialize the page
    initializePage();
});
