/* neXa interactive UI */
document.addEventListener('DOMContentLoaded', () => {
  $$('.nx-faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.closest('.nx-faq-item');
      if (!item) return;
      const wasOpen = item.classList.contains('active');
      $$('.nx-faq-item').forEach((el) => el.classList.remove('active'));
      if (!wasOpen) item.classList.add('active');
    });
  });

  const scrollTopBtn = $('#nx-scroll-top');
  if (!scrollTopBtn) return;
  const update = () => scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
  window.addEventListener('scroll', update, { passive: true });
  update();
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
