/* ==========================================
   neXa Toast Notifications
   ========================================== */

const nxToast = {
  show(message, type = 'info') {
    const container = $('#nx-toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `nx-toast nx-toast-${type}`;
    toast.textContent = message;

    // Toast Style
    Object.assign(toast.style, {
      backgroundColor: type === 'success' ? '#10b981' : '#3b82f6',
      color: '#ffffff',
      padding: '12px 20px',
      borderRadius: '8px',
      marginTop: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      transition: 'all 0.3s ease',
    });

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  success(msg) {
    this.show(msg, 'success');
  },
  info(msg) {
    this.show(msg, 'info');
  },
};
