/* ==========================================
   neXa Preloader
   ========================================== */

document.addEventListener('DOMContentLoaded', async () => {
  const preloader = $('#nx-preloader');
  const textEl = $('#nx-preloader-text');
  const statusEl = $('#nx-preloader-status');

  if (!preloader || !textEl) return;

  const brandName = "neXa";
  
  // Typing Animation Effect
  for (let i = 0; i <= brandName.length; i++) {
    textEl.textContent = brandName.substring(0, i);
    await sleep(200);
  }

  if (statusEl) statusEl.textContent = "Ready!";
  await sleep(400);

  // Smooth Fade Out
  preloader.classList.add('nx-preloader-hidden');
});
