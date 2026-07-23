/**
 * neXa Landing Page — Core Application JS
 */

document.addEventListener('DOMContentLoaded', () => {
  neXaApp.init();
});

const neXaApp = {
  init() {
    this.initLucideIcons();
    this.initMobileMenu();
    this.initFAQAccordion();
    this.initSmoothScroll();
    console.log('neXa Core Engine V1.1 online.');
  },

  initLucideIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  },

  initMobileMenu() {
    const menuBtn = document.getElementById('nx-mobile-menu-btn');
    const mobileMenu = document.getElementById('nx-mobile-menu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
      });

      const mobileNavLinks = mobileMenu.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
  },

  initFAQAccordion() {
    const faqItems = document.querySelectorAll('.nx-faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const answer = item.querySelector('.nx-faq-answer');
        const isAlreadyOpen = item.classList.contains('active');

        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.nx-faq-answer');
          if (otherAnswer) {
            otherAnswer.classList.add('hidden');
          }
        });

        if (!isAlreadyOpen && answer) {
          item.classList.add('active');
          answer.classList.remove('hidden');
        }
      });
    });
  },

  initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#' || href === '') return;

        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};
