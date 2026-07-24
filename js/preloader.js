/* js/preloader.js */
(function () {
  'use strict';

  const BRAND_TEXT = 'neXa';
  const TYPING_SPEED = 150;
  const FADE_DELAY = 400;

  function typeBrandName(element, callback) {
    let index = 0;
    element.textContent = '';

    const timer = setInterval(() => {
      if (index < BRAND_TEXT.length) {
        element.textContent += BRAND_TEXT.charAt(index);
        index++;
      } else {
        clearInterval(timer);
        if (typeof callback === 'function') {
          callback();
        }
      }
    }, TYPING_SPEED);
  }

  function hidePreloader() {
    const preloaderEl = document.getElementById('nx-preloader');
    if (!preloaderEl) return;

    setTimeout(() => {
      preloaderEl.classList.add('nx-preloader-hidden');
    }, FADE_DELAY);
  }

  function initPreloader() {
    const brandTextEl = document.getElementById('nx-preloader-text');
    const statusTextEl = document.getElementById('nx-preloader-status');

    if (brandTextEl) {
      typeBrandName(brandTextEl, () => {
        if (statusTextEl) {
          statusTextEl.textContent = 'Loading...';
        }
      });
    }

    window.addEventListener('load', () => {
      hidePreloader();
    });
  }

  document.addEventListener('DOMContentLoaded', initPreloader);
})();
