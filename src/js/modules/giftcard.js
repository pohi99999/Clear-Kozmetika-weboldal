/**
 * Digital Gift Voucher Customizer & 3D Tilt Effect Module
 * Clear Kozmetika (Kelemen Anikó)
 */

export function initGiftCardModule() {
  const amountSelect = document.getElementById('giftcard-amount-select');
  const recipientInput = document.getElementById('giftcard-recipient-input');
  const senderInput = document.getElementById('giftcard-sender-input');
  const messageInput = document.getElementById('giftcard-message-input');

  const previewAmount = document.getElementById('preview-giftcard-amount');
  const previewRecipient = document.getElementById('preview-giftcard-recipient');
  const previewSender = document.getElementById('preview-giftcard-sender');
  const previewMessage = document.getElementById('preview-giftcard-message');
  const cardPreview = document.getElementById('giftcard-3d-preview');
  const buyBtn = document.getElementById('giftcard-buy-btn');

  // Live input sync with smooth typing glow
  if (amountSelect && previewAmount) {
    amountSelect.addEventListener('change', (e) => {
      previewAmount.textContent = e.target.value;
      triggerGlow(previewAmount);
    });
  }

  if (recipientInput && previewRecipient) {
    recipientInput.addEventListener('input', (e) => {
      previewRecipient.textContent = e.target.value || 'Kelemen Anikó Tisztelője';
      triggerGlow(previewRecipient);
    });
  }

  if (senderInput && previewSender) {
    senderInput.addEventListener('input', (e) => {
      previewSender.textContent = e.target.value || 'Az Ön Neve';
      triggerGlow(previewSender);
    });
  }

  if (messageInput && previewMessage) {
    messageInput.addEventListener('input', (e) => {
      previewMessage.textContent = e.target.value ? `"${e.target.value}"` : '"Szeretettel és kényeztető élménnyel!"';
      triggerGlow(previewMessage);
    });
  }

  function triggerGlow(element) {
    element.style.transition = 'color 0.2s ease, text-shadow 0.2s ease';
    element.style.color = '#FFE899';
    element.style.textShadow = '0 0 10px rgba(255, 212, 55, 0.8)';
    setTimeout(() => {
      element.style.color = '';
      element.style.textShadow = '';
    }, 400);
  }

  // 3D Tilt Effect on Mouse Move / Hover
  if (cardPreview) {
    cardPreview.addEventListener('mousemove', (e) => {
      const rect = cardPreview.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12; // tilt angle X
      const rotateY = ((x - centerX) / centerX) * 12;  // tilt angle Y

      cardPreview.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    cardPreview.addEventListener('mouseleave', () => {
      cardPreview.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  if (buyBtn) {
    buyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Sikeres Utalvány Megrendelés!\n\nAz ajándékutalvány (${amountSelect ? amountSelect.value : ''}) generálása megtörtént. A sikeres fizetést követően az utalvány azonnal letölthető nyomtatható, névreszóló PDF formátumban!`);
    });
  }
}
