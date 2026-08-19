/* neXa modal controller */
document.addEventListener('DOMContentLoaded', () => {
  const modal = $('#nx-login-modal');
  if (!modal) return;

  const openButtons = $$('[data-nx-modal-target="nx-login-modal"]');
  const closeButton = modal.querySelector('.nx-modal-close');
  const closeModal = () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nx-modal-open');
  };

  openButtons.forEach((button) => button.addEventListener('click', () => {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nx-modal-open');
  }));

  closeButton?.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });
});
