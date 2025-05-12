// Header que se reduce al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Manejo del menú móvil
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

toggleBtn.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    sidebar.setAttribute('aria-hidden', isExpanded);
    overlay.classList.toggle('active', !isExpanded);
    document.body.style.overflow = isExpanded ? '' : 'hidden';
});

overlay.addEventListener('click', closeSidebar);

// Cerrar sidebar al hacer clic en un enlace
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

function closeSidebar() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Año actual en el footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animación de aparición para elementos
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .project-card, .skill-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Inicializar animaciones
window.addEventListener('load', () => {
    document.querySelectorAll('.section, .project-card, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});

window.addEventListener('scroll', animateOnScroll);
