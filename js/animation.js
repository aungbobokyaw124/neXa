/* js/animation.js */
(function () {
  'use strict';

  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.nx-animate-on-scroll');

    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach((el) => {
        el.classList.add('nx-fade-in');
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animationClass = target.getAttribute('data-nx-animation') || 'nx-fade-in';
          
          target.classList.add(animationClass);
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => {
      animationObserver.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', initScrollAnimations);
})();
