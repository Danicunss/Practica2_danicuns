const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
    mainNav.classList.toggle('is-open', !isExpanded);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
      mainNav.classList.remove('is-open');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const interestForm = document.querySelector('#interest-form');
const feedback = document.querySelector('#form-feedback');

if (interestForm && feedback) {
  interestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!interestForm.reportValidity()) return;

    const name = interestForm.elements.name.value.trim();
    feedback.textContent = `¡Gracias, ${name}! El formulario está validado, pero esta demo no envía ni guarda los datos.`;
    interestForm.reset();
  });
}
