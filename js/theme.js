/* ==========================================
   neXa Theme Toggle
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = $('.nx-theme-toggle');
  const darkIcon = $('.nx-icon-dark');
  const lightIcon = $('.nx-icon-light');

  // localStorage မှ Theme ယူခြင်း (Default: dark)
  const savedTheme = localStorage.getItem('nx-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcons(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('nx-theme', newTheme);
      updateIcons(newTheme);
    });
  }

  function updateIcons(theme) {
    if (!darkIcon || !lightIcon) return;
    if (theme === 'light') {
      darkIcon.classList.add('hidden');
      lightIcon.classList.remove('hidden');
    } else {
      darkIcon.classList.remove('hidden');
      lightIcon.classList.add('hidden');
    }
  }
});
