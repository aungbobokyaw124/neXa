/* js/menu.js */
(function () {
  'use strict';

  function initStickyHeader() {
    const header = document.querySelector('.nx-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('nx-header-scrolled');
      } else {
        header.classList.remove('nx-header-scrolled');
      }
    });
  }

  function initMobileMenu() {
    const menuToggleBtn = document.getElementById('nx-menu-toggle');
    const mobileDrawer = document.getElementById('nx-mobile-drawer');

    if (!menuToggleBtn || !mobileDrawer) return;

    menuToggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('nx-drawer-open');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
  });
})();
