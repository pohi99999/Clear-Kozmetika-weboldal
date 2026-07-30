/**
 * VIP Loyalty Points Calculator & Rewards Module
 * Clear Kozmetika (Kelemen Anikó)
 */

export function initLoyaltyModule() {
  const loyaltyInput = document.getElementById('loyalty-amount-input');
  const loyaltyPointsDisplay = document.getElementById('loyalty-points-display');
  const loyaltyTierDisplay = document.getElementById('loyalty-tier-display');
  const rewardItems = document.querySelectorAll('.loyalty-reward-item');

  if (loyaltyInput && loyaltyPointsDisplay) {
    const updateLoyalty = () => {
      const amount = parseFloat(loyaltyInput.value) || 0;
      const points = Math.floor(amount / 100); // 100 Ft = 1 VIP Pont
      loyaltyPointsDisplay.textContent = `${points.toLocaleString('hu-HU')} VIP Pont`;

      let tier = 'Bronz VIP';
      if (points >= 1500) {
        tier = 'Gyémánt VIP (15% kedvezmény minden natúr termékre)';
      } else if (points >= 800) {
        tier = 'Arany VIP (10% kedvezmény minden natúr termékre)';
      } else if (points >= 300) {
        tier = 'Ezüst VIP (5% kedvezmény minden natúr termékre)';
      }

      if (loyaltyTierDisplay) {
        loyaltyTierDisplay.textContent = tier;
      }

      rewardItems.forEach(item => {
        const reqPoints = parseInt(item.dataset.points || '0', 10);
        if (points >= reqPoints) {
          item.style.opacity = '1';
          item.style.borderColor = 'var(--color-primary)';
          const badge = item.querySelector('.reward-badge');
          if (badge) badge.textContent = 'Azonnal Beváltható';
        } else {
          item.style.opacity = '0.6';
          item.style.borderColor = 'var(--color-border)';
          const badge = item.querySelector('.reward-badge');
          if (badge) badge.textContent = `Szükséges: ${reqPoints} pont`;
        }
      });
    };

    loyaltyInput.addEventListener('input', updateLoyalty);
    updateLoyalty();
  }
}
