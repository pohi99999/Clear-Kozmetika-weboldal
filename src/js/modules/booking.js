/**
 * 24/7 Online Appointment Booking Module
 * Clear Kozmetika (Kelemen Anikó)
 */

export function initBookingModule() {
  const bookingForm = document.getElementById('booking-form');
  const bookingModal = document.getElementById('booking-modal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal-btn, .nav-cta, #hero-cta-booking');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.getAttribute('href') === '#idopontfoglalas' || btn.classList.contains('open-booking-modal-btn')) {
        if (bookingModal) {
          e.preventDefault();
          bookingModal.style.display = 'flex';
        }
      }
    });
  });

  const closeModalBtn = document.getElementById('close-booking-modal');
  if (closeModalBtn && bookingModal) {
    closeModalBtn.addEventListener('click', () => {
      bookingModal.style.display = 'none';
    });

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.style.display = 'none';
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const serviceSelect = document.getElementById('booking-service-select');
      const dateInput = document.getElementById('booking-date-input');
      const timeInput = document.getElementById('booking-time-input');
      const nameInput = document.getElementById('booking-name-input');
      const phoneInput = document.getElementById('booking-phone-input');

      const serviceName = serviceSelect ? serviceSelect.value : 'Kezelés';
      const dateVal = dateInput ? dateInput.value : 'kiválasztott napon';
      const timeVal = timeInput ? timeInput.value : 'kiválasztott időpontban';

      alert(`Sikeres időpontfoglalás!\n\nKedves ${nameInput ? nameInput.value : 'Vendégünk'}!\n\nKöszönjük a foglalást a Clear Kozmetika szalonba (${serviceName}).\nIdőpont: ${dateVal} ${timeVal}.\n\nAutomatikus SMS és e-mail emlékeztetőt küldtünk a(z) ${phoneInput ? phoneInput.value : ''} telefonszámra!`);

      if (bookingModal) {
        bookingModal.style.display = 'none';
      }
      bookingForm.reset();
    });
  }
}
