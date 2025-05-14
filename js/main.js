// Control del sidebar
const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.close-sidebar');

toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    sidebar.setAttribute('aria-hidden', isExpanded);
    overlay.classList.toggle('active', !isExpanded);
});

closeBtn.addEventListener('click', () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('active');
});

// Cerrar al hacer clic en enlaces
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        sidebar.setAttribute('aria-hidden', 'true');
        overlay.classList.remove('active');
    });
});

// Año actual
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mostrar botón WhatsApp después de 5 segundos
setTimeout(() => {
    document.querySelector('.whatsapp-float').style.display = 'flex';
}, 5000);