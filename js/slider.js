/* ==========================================
   neXa Announcement Slider
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const items = $$('.nx-announcement-item');
  if (items.length <= 1) return;

  let currentIndex = 0;

  setInterval(() => {
    items[currentIndex].classList.remove('nx-slide-active');
    items[currentIndex].classList.add('nx-slide-hidden');

    currentIndex = (currentIndex + 1) % items.length;

    items[currentIndex].classList.remove('nx-slide-hidden');
    items[currentIndex].classList.add('nx-slide-active');
  }, 4000);
});
