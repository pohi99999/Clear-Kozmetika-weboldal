/**
 * Main Entry Point & Performance Optimized UI Architecture
 * Clear Kozmetika (Kelemen Anikó) - Pécs Donátus
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Critical Above-The-Fold Setup
  initHeader();
  initMobileMenu();
  initBrandSplit();
  initServiceTabs();
  initScrollReveal();
  initQuickActions();
  initFAQAccordion();

  // 2. Dynamic Asynchronous Module Loading (Unblocking Main Thread)
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => loadFunctionalModules(), { timeout: 2000 });
  } else {
    setTimeout(loadFunctionalModules, 150);
  }
});

function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';

      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.className = isActive ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    mainNav.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

function initBrandSplit() {
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
}

function initServiceTabs() {
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
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.split-card, .service-card, .calculator-card, .giftcard-container, .appointment-card, .review-card, .faq-item');
  
  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
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
}

function initQuickActions() {
  const fabBtn = document.getElementById('fab-main-btn');
  const fabMenu = document.getElementById('quick-actions-menu');

  if (fabBtn && fabMenu) {
    fabBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fabBtn.classList.toggle('active');
      fabMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      fabBtn.classList.remove('active');
      fabMenu.classList.remove('active');
    });
  }
}

function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const parentItem = question.closest('.faq-item');
      if (!parentItem) return;

      const isActive = parentItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        parentItem.classList.add('active');
      }
    });
  });
}

async function loadFunctionalModules() {
  try {
    const [quizModule, bookingModule, giftcardModule, loyaltyModule] = await Promise.all([
      import('./modules/quiz.js'),
      import('./modules/booking.js'),
      import('./modules/giftcard.js'),
      import('./modules/loyalty.js')
    ]);

    if (quizModule.initQuizModule) quizModule.initQuizModule();
    if (bookingModule.initBookingModule) bookingModule.initBookingModule();
    if (giftcardModule.initGiftCardModule) giftcardModule.initGiftCardModule();
    if (loyaltyModule.initLoyaltyModule) loyaltyModule.initLoyaltyModule();
  } catch (err) {
    console.error('Error loading dynamic modules:', err);
  }
}
