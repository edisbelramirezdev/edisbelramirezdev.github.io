document.addEventListener('DOMContentLoaded', function () {
  // ===== Sidebar =====
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const closeBtn = document.querySelector('.close-sidebar');

  function toggleSidebar() {
    if (!sidebar) return;
    const isOpen = sidebar.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
    toggleBtn?.setAttribute('aria-expanded', isOpen);
    sidebar.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn?.addEventListener('click', toggleSidebar);
  overlay?.addEventListener('click', toggleSidebar);
  closeBtn?.addEventListener('click', toggleSidebar);

  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (sidebar?.classList.contains('active')) toggleSidebar();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar?.classList.contains('active')) {
      toggleSidebar();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sidebar?.classList.contains('active')) {
      toggleSidebar();
    }
  });

  // ===== Banner de cookies =====
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');

  if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.add('show');
    cookieBanner.setAttribute('aria-hidden', 'false');
  }

  acceptCookiesBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.remove('show');
    cookieBanner.setAttribute('aria-hidden', 'true');
  });

  // ===== Modales legales =====
  function abrirModal(id) {
    document.getElementById(`modal-${id}`)?.classList.add('show');
    document.getElementById(`overlay-${id}`)?.classList.add('show');
  }

  function cerrarModal(id) {
    document.getElementById(`modal-${id}`)?.classList.remove('show');
    document.getElementById(`overlay-${id}`)?.classList.remove('show');
  }

  document.querySelectorAll('.footer-legal a[data-modal], .cookie-banner a[data-modal]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      abrirModal(link.dataset.modal);
    });
  });

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => cerrarModal(btn.dataset.target));
  });

  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.addEventListener('click', () => {
      const id = ov.id.replace('overlay-', '');
      cerrarModal(id);
    });
  });

  // ===== Año dinámico =====
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== Envío del formulario de contacto (AJAX) =====
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!formStatus) return;

    formStatus.textContent = 'Enviando...';
    formStatus.className = 'form-status';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      const data = await response.json();

      if (data.success) {
        formStatus.textContent = data.message || '¡Mensaje enviado con éxito!';
        formStatus.classList.add('success');
        contactForm.reset();
      } else {
        formStatus.textContent = data.message || 'Error al enviar el mensaje.';
        formStatus.classList.add('error');
      }
    } catch (err) {
      formStatus.textContent = 'Error de conexión. Inténtalo de nuevo.';
      formStatus.classList.add('error');
    }
  });

  // ===== Botón copiar enlace (compartir) =====
  const copyBtn = document.getElementById('copy-link');
  copyBtn?.addEventListener('click', async () => {
    const url = 'https://edisbelramirezdev.github.io';
    try {
      await navigator.clipboard.writeText(url);
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = '<i class="fas fa-check"></i>';
      copyBtn.setAttribute('aria-label', 'Enlace copiado');
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = '<i class="fas fa-link"></i>';
        copyBtn.setAttribute('aria-label', 'Copiar enlace');
      }, 2000);
    } catch (err) {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = '<i class="fas fa-link"></i>';
      }, 2000);
    }
  });

  // ===== PRENSA: FILTROS Y PAGINACIÓN =====
  (function initPress() {
    const pressGrid = document.getElementById('press-grid');
    if (!pressGrid) return;

    const pressFilters = document.querySelectorAll('.press-filter');
    const allPressCards = Array.from(document.querySelectorAll('.press-card'));
    const pressEmpty = document.getElementById('press-empty');
    const pressPagination = document.getElementById('press-pagination');
    const pressPrev = document.getElementById('press-prev');
    const pressNext = document.getElementById('press-next');
    const pressPageNumbers = document.getElementById('press-page-numbers');
    const pressPageInfo = document.getElementById('press-page-info');

    const ITEMS_PER_PAGE = 4; // 👈 Cambia aquí cuántas tarjetas por página

    let currentCategory = 'all';
    let currentPage = 1;

    function getFilteredCards() {
      return allPressCards.filter(card => {
        return currentCategory === 'all' || card.dataset.category === currentCategory;
      });
    }

    function renderPagination() {
      const filteredCards = getFilteredCards();
      const totalPages = Math.max(1, Math.ceil(filteredCards.length / ITEMS_PER_PAGE));

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      allPressCards.forEach(card => card.classList.add('hidden'));
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      filteredCards.slice(start, end).forEach(card => card.classList.remove('hidden'));

      if (pressEmpty) {
        pressEmpty.style.display = filteredCards.length === 0 ? 'block' : 'none';
      }

      if (pressPagination) {
        pressPagination.style.display = totalPages <= 1 ? 'none' : 'flex';
      }

      if (pressPageInfo) {
        if (filteredCards.length === 0) {
          pressPageInfo.textContent = '';
        } else {
          pressPageInfo.innerHTML = `Mostrando <strong>${start + 1}-${Math.min(end, filteredCards.length)}</strong> de <strong>${filteredCards.length}</strong> menciones · Página <strong>${currentPage}</strong> de <strong>${totalPages}</strong>`;
        }
      }

      if (pressPrev) pressPrev.disabled = currentPage === 1;
      if (pressNext) pressNext.disabled = currentPage === totalPages;

      if (pressPageNumbers) {
        pressPageNumbers.innerHTML = '';
        const pages = getPageNumbers(currentPage, totalPages);

        pages.forEach(p => {
          if (p === '...') {
            const dots = document.createElement('span');
            dots.className = 'press-page-dots';
            dots.textContent = '…';
            pressPageNumbers.appendChild(dots);
          } else {
            const btn = document.createElement('button');
            btn.className = 'press-page-number' + (p === currentPage ? ' active' : '');
            btn.textContent = p;
            btn.setAttribute('aria-label', `Ir a la página ${p}`);
            if (p === currentPage) btn.setAttribute('aria-current', 'page');
            btn.addEventListener('click', () => {
              currentPage = p;
              renderPagination();
              scrollToPress();
            });
            pressPageNumbers.appendChild(btn);
          }
        });
      }
    }

    function getPageNumbers(current, total) {
      const delta = 1;
      const range = [];
      const rangeWithDots = [];
      let l;

      for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
          range.push(i);
        }
      }

      for (const i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push('...');
          }
        }
        rangeWithDots.push(i);
        l = i;
      }

      return rangeWithDots;
    }

    function scrollToPress() {
      const pressSection = document.getElementById('press');
      if (pressSection) {
        const headerOffset = 80;
        const elementPosition = pressSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
      }
    }

    pressFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        pressFilters.forEach(f => {
          f.classList.remove('active');
          f.setAttribute('aria-selected', 'false');
        });
        filter.classList.add('active');
        filter.setAttribute('aria-selected', 'true');

        currentCategory = filter.dataset.filter;
        currentPage = 1;
        renderPagination();
      });
    });

    pressPrev?.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPagination();
        scrollToPress();
      }
    });

    pressNext?.addEventListener('click', () => {
      const totalPages = Math.max(1, Math.ceil(getFilteredCards().length / ITEMS_PER_PAGE));
      if (currentPage < totalPages) {
        currentPage++;
        renderPagination();
        scrollToPress();
      }
    });

    renderPagination();
  })();
});