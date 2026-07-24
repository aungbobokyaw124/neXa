/* js/modal.js */
(function () {
  'use strict';

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.style.display = 'flex';
    modal.classList.add('nx-modal-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalTarget) {
    const modal = typeof modalTarget === 'string' 
      ? document.getElementById(modalTarget) 
      : modalTarget;

    if (!modal) return;

    modal.style.display = 'none';
    modal.classList.remove('nx-modal-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initModals() {
    const triggers = document.querySelectorAll('[data-nx-modal-target]');
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = trigger.getAttribute('data-nx-modal-target');
        if (targetId) openModal(targetId);
      });
    });

    const closeBtns = document.querySelectorAll('.nx-modal-close');
    closeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = btn.closest('.nx-modal');
        if (modal) closeModal(modal);
      });
    });

    const modals = document.querySelectorAll('.nx-modal');
    modals.forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.nx-modal.nx-modal-open');
        if (activeModal) closeModal(activeModal);
      }
    });
  }

  window.nxOpenModal = openModal;
  window.nxCloseModal = closeModal;

  document.addEventListener('DOMContentLoaded', initModals);
})();
