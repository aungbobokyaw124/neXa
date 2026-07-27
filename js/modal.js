/* ==========================================
   neXa Modal Logic
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const modal = $('#nx-login-modal');
  const openBtns = $$('[data-nx-modal-target="nx-login-modal"]');
  const closeBtn = $('.nx-modal-close');

  if (!modal) return;

  openBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Modal အပြင်ဘက်ကို နှိပ်လျှင် ပိတ်ခြင်း
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
});
