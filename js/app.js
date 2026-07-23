/**
 * neXa Landing Page V1 — Core Application Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  neXaApp.init();
});

const neXaApp = {
  /**
   * Application Initialization Entry Point
   */
  init() {
    this.initLucideIcons();
    this.initMobileMenu();
    this.initFAQAccordion();
    this.initSmoothScroll();
    this.initScrollAnimations();
    console.log('neXa Core Engine V1 initialized.');
  },

  /**
   * Render Lucide Vector Line Icons
   */
  initLucideIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  },

  /**
   * Mobile Drawer Navigation Toggle Logic
   */
  initMobileMenu() {
    const menuBtn = document.getElementById('nx-mobile-menu-btn');
    const mobileMenu = document.getElementById('nx-mobile-menu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
        } else {
          mobileMenu.classList.add('hidden');
        }
      });

      // Close mobile menu when clicking outside or on a nav link
      const mobileNavLinks = mobileMenu.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
  },

  /**
   * Single-Expand FAQ Accordion Logic
   */
  initFAQAccordion() {
    const faqItems = document.querySelectorAll('.nx-faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const answer = item.querySelector('.nx-faq-answer');
        const isAlreadyOpen = item.classList.contains('active');

        // Close all other open accordions
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.nx-faq-answer');
          if (otherAnswer) {
            otherAnswer.classList.add('hidden');
          }
        });

        // Toggle state for current item
        if (!isAlreadyOpen && answer) {
          item.classList.add('active');
          answer.classList.remove('hidden');
        }
      });
    });
  },

  /**
   * Smooth Anchor Link Scroll Behavior
   */
  initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#' || href === '') return;

        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  },

  /**
   * Lightweight IntersectionObserver Fade-In Animations
   */
  initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.nx-card, .nx-hero');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('nx-animate-show');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      animatedElements.forEach(el => {
        el.classList.add('nx-animate-hidden');
        observer.observe(el);
      });
    }
  }
};

