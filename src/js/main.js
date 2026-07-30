/**
 * Main Entry Point & Global WOW Factor Interactions
 * Clear Kozmetika (Kelemen Anikó) - Pécs Donátus
 */

import { initQuizModule } from './modules/quiz.js';
import { initBookingModule } from './modules/booking.js';
import { initGiftCardModule } from './modules/giftcard.js';
import { initLoyaltyModule } from './modules/loyalty.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Clear Kozmetika Web Application (v1.0 WOW Edition) Initialized.');

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

    mainNav.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // Brand-Split Interactive Slider / Switcher
  const splitToggleBtns = document.querySelectorAll('.split-toggle-btn');
  const bioCard = document.getElementById('card-bio');
  const techCard = document.getElementById('card-tech');

  splitToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.split;

      splitToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (mode === 'bio') {
        bioCard?.classList.remove('dimmed');
        bioCard?.classList.add('focused');
        techCard?.classList.remove('focused');
        techCard?.classList.add('dimmed');
      } else if (mode === 'tech') {
        techCard?.classList.remove('dimmed');
        techCard?.classList.add('focused');
        bioCard?.classList.remove('focused');
        bioCard?.classList.add('dimmed');
      } else {
        bioCard?.classList.remove('dimmed', 'focused');
        techCard?.classList.remove('dimmed', 'focused');
      }
    });
  });

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

  // Scroll Reveal Animations via IntersectionObserver
  const revealElements = document.querySelectorAll('.split-card, .service-card, .calculator-card, .giftcard-container, .appointment-card');
  
  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // Initialize functional modules
  initQuizModule();
  initBookingModule();
  initGiftCardModule();
  initLoyaltyModule();
});
