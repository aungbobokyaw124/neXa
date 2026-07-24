/* js/slider.js */
(function () {
  'use strict';

  function createAutoSlider({ containerSelector, itemSelector, intervalMs = 4000 }) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);
    if (items.length <= 1) return;

    let currentIndex = 0;
    let timer = null;

    function showSlide(index) {
      items.forEach((item, idx) => {
        if (idx === index) {
          item.classList.add('nx-slide-active');
          item.classList.remove('nx-slide-hidden');
        } else {
          item.classList.remove('nx-slide-active');
          item.classList.add('nx-slide-hidden');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    }

    function startAutoPlay() {
      if (!timer) {
        timer = setInterval(nextSlide, intervalMs);
      }
    }

    function stopAutoPlay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    showSlide(currentIndex);
    startAutoPlay();

    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);
  }

  function initAllSliders() {
    createAutoSlider({
      containerSelector: '#nx-announcement-slider',
      itemSelector: '.nx-announcement-item',
      intervalMs: 5000
    });
  }

  document.addEventListener('DOMContentLoaded', initAllSliders);
})();
