/**
 * Skin Diagnostics & Treatment Quiz Module
 * Clear Kozmetika (Kelemen Anikó)
 */

export function initQuizModule() {
  const quizContainer = document.getElementById('borapolas-quiz');
  if (!quizContainer) return;

  const state = {
    goal: 'antiaging',
    skinType: 'normal',
    ageGroup: '25-40'
  };

  const optionBtns = quizContainer.querySelectorAll('.quiz-option-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const currentBtn = e.currentTarget;
      const parentGrid = currentBtn.closest('.quiz-options-grid');
      if (!parentGrid) return;

      parentGrid.querySelectorAll('.quiz-option-btn').forEach(b => b.classList.remove('selected'));
      currentBtn.classList.add('selected');

      const val = currentBtn.dataset.value;
      const type = currentBtn.dataset.type;
      if (type && val) {
        state[type] = val;
      }
    });
  });

  const calculateBtn = document.getElementById('quiz-submit-btn');
  const resultCard = document.getElementById('quiz-result-card');

  if (calculateBtn && resultCard) {
    calculateBtn.addEventListener('click', () => {
      let treatment = '';
      let desc = '';
      let product = '';

      if (state.goal === 'antiaging') {
        treatment = 'Fasciális Arcterápia – Arany Csomag & EndoTight Facelift';
        desc = 'Kötőszöveti mély masszázs Clear Vadrózsa Q10 szérummal és mikrovibrációs kollagén stimulációval.';
        product = 'Clear Vadrózsa Q10 Arcszérum (Bio & Demeter alapanyagokkal)';
      } else if (state.goal === 'cleansing') {
        treatment = 'Hollywood Carbon Peeling (Nd:YAG) & Mélytisztítás';
        desc = 'Lézeres pórustisztítás, faggyútermelés-szabályozás és gyulladáscsökkentés.';
        product = 'Clear Tisztító & Matító Bio Rituálé Szett';
      } else if (state.goal === 'rosacea') {
        treatment = 'Rozaceás Arckezelés Safe Lézerrel (808 nm)';
        desc = 'Magyar orvosi szabadalmaztatott biostimulációs lézerterápia a hajszálerek mikrokerengéséért.';
        product = 'Clear Nyugtató Orvosi Körömvirág & Argán Szérum';
      } else {
        treatment = 'HIEMT & Monosculpt RF Kombinált Alakformáló Kúra';
        desc = 'Magas intenzitású elektromágneses izomépítés és 2MHz monopoláris rádiófrekvenciás zsírégetés.';
        product = 'Clear Feszesítő Bio Body Elixír';
      }

      resultCard.innerHTML = `
        <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--color-primary); border-radius: var(--border-radius-md); padding: 2rem; margin-top: 2rem; text-align: left; animation: fadeIn 0.5s ease;">
          <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: var(--color-primary-dark); font-weight: 700;">Az Ön Személyre Szabott Diagnosztikája</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--color-text-main); margin: 0.5rem 0 1rem 0;">${treatment}</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.2rem;">${desc}</p>
          <div style="background: var(--color-bg-card); padding: 1rem; border-radius: var(--border-radius-sm); border-left: 4px solid var(--color-secondary); margin-bottom: 1.5rem;">
            <strong style="color: var(--color-secondary); font-size: 0.88rem;">Ajánlott Otthoni Ápolás:</strong>
            <p style="margin-top: 0.2rem; font-size: 0.9rem; color: var(--color-text-main);">${product}</p>
          </div>
          <a href="#idopontfoglalas" class="btn-primary" style="display: inline-flex; width: 100%; justify-content: center;">
            <i class="fa-solid fa-calendar-check"></i> Időpontfoglalás erre a Kezelésre
          </a>
        </div>
      `;
      resultCard.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
