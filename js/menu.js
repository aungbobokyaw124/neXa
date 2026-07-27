/* ==========================================
   neXa Interactive Components (FAQ & Scroll Top)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Logic
  const faqQuestions = $$('.nx-faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      // အခြားဖွင့်ထားသော FAQ များကို ပိတ်ခြင်း (One item open at a time)
      $$('.nx-faq-item').forEach((el) => el.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Scroll To Top Button Logic
  const scrollTopBtn = $('#nx-scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
