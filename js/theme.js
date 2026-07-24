/* js/theme.js */
(function () {
  'use strict';

  const THEME_KEY = 'nexa_theme_preference';
  const DEFAULT_THEME = 'dark';

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleIcons(theme);
  }

  function updateThemeToggleIcons(theme) {
    const toggleBtns = document.querySelectorAll('.nx-theme-toggle');
    toggleBtns.forEach((btn) => {
      const darkIcon = btn.querySelector('.nx-icon-dark');
      const lightIcon = btn.querySelector('.nx-icon-light');

      if (darkIcon && lightIcon) {
        if (theme === 'dark') {
          darkIcon.classList.add('hidden');
          lightIcon.classList.remove('hidden');
        } else {
          darkIcon.classList.remove('hidden');
          lightIcon.classList.add('hidden');
        }
      }
    });
  }

  window.nxToggleTheme = function () {
    const currentTheme = getSavedTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = getSavedTheme();
    applyTheme(initialTheme);

    const toggleBtns = document.querySelectorAll('.nx-theme-toggle');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', window.nxToggleTheme);
    });
  });
})();
