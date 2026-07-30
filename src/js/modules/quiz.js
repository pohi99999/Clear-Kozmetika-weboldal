/**
 * Visual Skin Diagnostics 2.0 & Personal Skin Care Pass Generator
 * Clear Kozmetika (Kelemen Anikó)
 */

export function initQuizModule() {
  const quizContainer = document.getElementById('borapolas-quiz');
  if (!quizContainer) return;

  const state = {
    goal: 'antiaging',
    type: 'normal',
    age: '25-40'
  };

  const optionCards = quizContainer.querySelectorAll('.quiz-option-card');
  optionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const currentCard = e.currentTarget;
      const parentGrid = currentCard.closest('.quiz-options-grid');
      if (!parentGrid) return;

      parentGrid.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
      currentCard.classList.add('selected');

      const val = currentCard.dataset.value;
      const type = currentCard.dataset.type;
      if (type && val) {
        state[type] = val;
      }
    });
  });

  const calculateBtn = document.getElementById('quiz-submit-btn');
  const resultContainer = document.getElementById('quiz-result-card');

  if (calculateBtn && resultContainer) {
    calculateBtn.addEventListener('click', () => {
      let treatment = '';
      let desc = '';
      let product = '';
      let icon = 'fa-sparkles';
      let tag = 'Anti-Aging & Kollagén Rituálé';

      if (state.goal === 'antiaging') {
        treatment = 'Fasciális Arcterápia (Arany Csomag) & EndoTight Facelift';
        desc = 'Kötőszöveti mélymasszázs Clear Argán Vadrózsa Q10 szérummal és 55 gömbös kompressziós mikrovibrációval a természetes kollagénindukcióért.';
        product = 'Clear Vadrózsa Q10 Bio Arcszérum (Bio & Demeter alapanyagokból)';
        icon = 'fa-wand-magic-sparkles';
        tag = 'Bőrfiatalító & Feszesítő Passz';
      } else if (state.goal === 'cleansing') {
        treatment = 'Hollywood Carbon Peeling (Nd:YAG Lézer) & Mélytisztítás';
        desc = 'Carbon géllel és orvosi Nd:YAG lézerrel végzett bőrmegújítás, faggyútermelés-szabályozás és pórustisztítás.';
        product = 'Clear Bio Tisztító & Pore-Minimizer Arcápoló Rituálé';
        icon = 'fa-droplet';
        tag = 'Mélytisztító & Matító Passz';
      } else if (state.goal === 'rosacea') {
        treatment = 'Rozaceás Arckezelés Safe Lézerrel (808 nm)';
        desc = 'Magyar orvosi szabadalmaztatott biostimulációs 808nm lézerterápia a hajszálerek gyulladáscsökkentéséért és regenerálásáért.';
        product = 'Clear Orvosi Körömvirág & Nyugtató Argán Elixír';
        icon = 'fa-heart-pulse';
        tag = 'Gyulladáscsökkentő & Nyugtató Passz';
      } else {
        treatment = 'HIEMT & Monosculpt RF Kombinált Alakformáló Kúra';
        desc = 'Magas intenzitású elektromágneses izomfejlesztés (20k felülés) és 2MHz monopoláris rádiófrekvenciás mély zsírégetés.';
        product = 'Clear Feszesítő Bio Body Elixír & Cellulit Ápoló';
        icon = 'fa-child-reaching';
        tag = 'Alakformáló & Zsírégető Passz';
      }

      const passId = 'CLEAR-PASS-' + Math.floor(1000 + Math.random() * 9000);

      resultContainer.innerHTML = `
        <div class="personal-skin-pass" style="background: linear-gradient(135deg, rgba(251, 248, 245, 0.95), rgba(243, 238, 231, 0.9)), url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80') center/cover no-repeat; background-blend-mode: overlay; border: 2px solid var(--color-primary); border-radius: var(--border-radius-lg); padding: 2.5rem 2rem; margin-top: 2.5rem; box-shadow: var(--shadow-hover); position: relative; animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1); text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--color-border-gold); padding-bottom: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--color-primary-dark); font-weight: 700;">${tag}</span>
              <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: var(--color-text-main); margin-top: 0.2rem;"><i class="fa-solid ${icon}" style="color: var(--color-primary); margin-right: 0.5rem;"></i> Personal Skin Care Pass</h3>
            </div>
            <div style="background: var(--color-primary); color: var(--color-text-main); font-weight: 700; font-size: 0.85rem; padding: 0.4rem 1rem; border-radius: var(--border-radius-pill); letter-spacing: 1px;">
              ${passId}
            </div>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--color-text-main); margin-bottom: 0.5rem;">Ajánlott Szalonkezelés:</h4>
            <p style="font-size: 1rem; font-weight: 600; color: var(--color-primary-dark); margin-bottom: 0.4rem;">${treatment}</p>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6;">${desc}</p>
          </div>

          <div style="background: var(--color-bg-card); padding: 1.2rem 1.5rem; border-radius: var(--border-radius-md); border-left: 4px solid var(--color-secondary); margin-bottom: 1.8rem; box-shadow: var(--shadow-subtle);">
            <strong style="color: var(--color-secondary); font-size: 0.88rem; text-transform: uppercase; letter-spacing: 1px;">Ajánlott Otthoni Bio Ápolás:</strong>
            <p style="margin-top: 0.3rem; font-size: 0.95rem; font-weight: 600; color: var(--color-text-main);">${product}</p>
          </div>

          <a href="#idopontfoglalas" class="btn-primary open-booking-modal-btn" style="display: inline-flex; width: 100%; justify-content: center; font-size: 1rem; padding: 1.1rem;">
            <i class="fa-solid fa-calendar-check"></i> Időpontfoglalás Ezzel A Passz-szal
          </a>
        </div>
      `;

      resultContainer.scrollIntoView({ behavior: 'smooth' });

      // Re-bind modal button event
      const newBookingBtn = resultContainer.querySelector('.open-booking-modal-btn');
      if (newBookingBtn) {
        newBookingBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const modal = document.getElementById('booking-modal');
          const serviceSelect = document.getElementById('booking-service-select');
          if (modal) {
            if (serviceSelect) {
              // Pre-select calculated treatment
              for (let i = 0; i < serviceSelect.options.length; i++) {
                if (serviceSelect.options[i].text.toLowerCase().includes(state.goal === 'rosacea' ? 'rozaceás' : state.goal === 'cleansing' ? 'carbon' : state.goal === 'bodysculpt' ? 'hiemt' : 'fasciális')) {
                  serviceSelect.selectedIndex = i;
                  break;
                }
              }
            }
            modal.style.display = 'flex';
          }
        });
      }
    });
  }
}
