/* js/toast.js */
(function () {
  'use strict';

  let toastContainer = null;

  function ensureContainer() {
    if (!toastContainer) {
      toastContainer = document.getElementById('nx-toast-container');
    }
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'nx-toast-container';
      toastContainer.className = 'nx-toast-container';
      document.body.appendChild(toastContainer);
    }
  }

  function showToast(message, type = 'info', duration = 3000) {
    ensureContainer();

    const toast = document.createElement('div');
    toast.className = `nx-toast nx-toast-${type} nx-slide-up`;
    
    let iconSymbol = 'ℹ️';
    if (type === 'success') iconSymbol = '✅';
    if (type === 'error') iconSymbol = '⚠️';

    toast.innerHTML = `
      <span class="nx-toast-icon">${iconSymbol}</span>
      <span class="nx-toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('nx-preloader-hidden');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      });
    }, duration);
  }

  window.nxToast = {
    show: showToast,
    success: (msg, duration) => showToast(msg, 'success', duration),
    error: (msg, duration) => showToast(msg, 'error', duration),
    info: (msg, duration) => showToast(msg, 'info', duration)
  };
})();
