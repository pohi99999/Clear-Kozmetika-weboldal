/**
 * Main Entry Point for Clear Kozmetika Web Application
 * Kelemen Anikó - Pécs Donátus
 */
import { initQuizModule } from './modules/quiz.js';
import { initBookingModule } from './modules/booking.js';
import { initGiftCardModule } from './modules/giftcard.js';
import { initLoyaltyModule } from './modules/loyalty.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Clear Kozmetika application initialized.');

  // Initialize Navbar toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Initialize functional modules
  initQuizModule();
  initBookingModule();
  initGiftCardModule();
  initLoyaltyModule();
});
