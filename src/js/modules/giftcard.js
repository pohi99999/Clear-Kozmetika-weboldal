/**
 * Digital Gift Voucher Customizer Module
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
  const buyBtn = document.getElementById('giftcard-buy-btn');

  if (amountSelect && previewAmount) {
    amountSelect.addEventListener('change', (e) => {
      previewAmount.textContent = e.target.value;
    });
  }

  if (recipientInput && previewRecipient) {
    recipientInput.addEventListener('input', (e) => {
      previewRecipient.textContent = e.target.value || 'Kelemen Anikó Tisztelője';
    });
  }

  if (senderInput && previewSender) {
    senderInput.addEventListener('input', (e) => {
      previewSender.textContent = e.target.value || 'Az Ön Neve';
    });
  }

  if (messageInput && previewMessage) {
    messageInput.addEventListener('input', (e) => {
      previewMessage.textContent = e.target.value || 'Szeretettel és kényeztető élménnyel!';
    });
  }

  if (buyBtn) {
    buyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Köszönjük! Az ajándékutalvány (${amountSelect ? amountSelect.value : ''}) vásárlási folyamata elindult. A fizetést követően az utalvány azonnal letölthető PDF formátumban!`);
    });
  }
}
