/**
 * Main Entry Point & Global Interactions
 * Clear Kozmetika (Kelemen Anikó) - Pécs Donátus
 */

import { initQuizModule } from './modules/quiz.js';
import { initBookingModule } from './modules/booking.js';
import { initGiftCardModule } from './modules/giftcard.js';
import { initLoyaltyModule } from './modules/loyalty.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Clear Kozmetika Web Application Initialized.');

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (mainNav.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Close menu when clicking links
    mainNav.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // Service Matrix Tab Switching
  const tabBtns = document.querySelectorAll('.service-tab-btn');
  const tabContents = document.querySelectorAll('.service-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.dataset.category;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-${targetCategory}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });

  // Initialize functional modules
  initQuizModule();
  initBookingModule();
  initGiftCardModule();
  initLoyaltyModule();
});
