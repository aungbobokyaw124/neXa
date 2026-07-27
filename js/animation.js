/* ==========================================
   neXa Scroll Animations
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = $$('.nx-animate-on-scroll');

  const observerOptions = {
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('nx-animated');
        observer.unobserve(entry.target); // တစ်ကြိမ် ပေါ်ပြီးပါက Observer မှ ရပ်တန့်မည်
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => observer.observe(el));
});
