/* ==========================================
   neXa Utilities
   ========================================== */

// Element ရွေးချယ်ရန် Helper
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Delay ပြုလုပ်ရန် Helper
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
