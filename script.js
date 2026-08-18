/* ==========================================
   PERSONALIZATION CONFIGURATION
   ========================================== */
// Leave GIRLFRIEND_NAME as empty string "" if you want generic text
const GIRLFRIEND_NAME = "";
const DATE = "21 August 2026";
const DEFAULT_TIME = "Evening 🌅";
const DEFAULT_ACTIVITY = "Surprise 🎁";

/* ==========================================
   MAIN INITIALIZATION
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyPersonalization();
  initFloatingHearts();
  initFormHandler();
});

/* ==========================================
   PERSONALIZATION HANDLER
   ========================================== */
function applyPersonalization() {
  const greetingEl = document.getElementById("personalizedGreeting");
  const messageEl = document.getElementById("personalizedMessage");

  if (GIRLFRIEND_NAME && GIRLFRIEND_NAME.trim() !== "") {
    const trimmedName = GIRLFRIEND_NAME.trim();
    if (greetingEl) {
      greetingEl.textContent = `HEY ${trimmedName.toUpperCase()} 💕`;
    }
    if (messageEl) {
      messageEl.innerHTML = `Dear ${trimmedName},<br /><br />How about we escape our usual routine for a little while and spend some time together? 🥰`;
    }
  }
}

/* ==========================================
   FLOATING HEARTS BACKGROUND
   ========================================== */
function initFloatingHearts() {
  const container = document.getElementById("bgHeartsContainer");
  if (!container) return;

  const heartEmojis = ["💗", "💖", "🌸", "✨", "💕", "🌺"];
  const heartCount = 15;

  for (let i = 0; i < heartCount; i++) {
    createFloatingHeart(container, heartEmojis);
  }
}

function createFloatingHeart(container, emojis) {
  const heart = document.createElement("span");
  heart.classList.add("floating-heart");
  
  // Random emoji selection
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Random horizontal position (0% - 100%)
  heart.style.left = `${Math.random() * 100}%`;
  
  // Random duration (6s - 12s)
  const duration = 6 + Math.random() * 6;
  heart.style.animationDuration = `${duration}s`;
  
  // Random delay
  heart.style.animationDelay = `${Math.random() * 5}s`;
  
  // Random size
  const size = 1 + Math.random() * 1.2;
  heart.style.fontSize = `${size}rem`;

  container.appendChild(heart);
}

/* ==========================================
   FORM & MODAL HANDLER
   ========================================== */
function initFormHandler() {
  const dateForm = document.getElementById("dateForm");
  const successModal = document.getElementById("successModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  if (!dateForm || !successModal) return;

  dateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Fetch user choices
    const selectedDate = dateForm.querySelector('input[name="date"]:checked')?.value || DATE;
    const selectedTime = dateForm.querySelector('input[name="time"]:checked')?.value || DEFAULT_TIME;
    const selectedActivity = dateForm.querySelector('input[name="activity"]:checked')?.value || DEFAULT_ACTIVITY;

    // Populate modal summary
    document.getElementById("summaryDate").textContent = selectedDate;
    document.getElementById("summaryTime").textContent = selectedTime;
    document.getElementById("summaryActivity").textContent = selectedActivity;

    // Show modal
    successModal.classList.add("active");
    successModal.setAttribute("aria-hidden", "false");

    // Fire confetti celebration
    triggerConfetti();
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      successModal.classList.remove("active");
      successModal.setAttribute("aria-hidden", "true");
    });
  }

  // Close modal when clicking outside of modal card
  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
      successModal.classList.remove("active");
      successModal.setAttribute("aria-hidden", "true");
    }
  });
}

/* ==========================================
   CONFETTI CELEBRATION
   ========================================== */
function triggerConfetti() {
  if (typeof confetti === "function") {
    // Burst 1
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff6b8b", "#ff85a2", "#ffe3ec", "#ffffff", "#d81b60"]
    });

    // Burst 2 (delayed)
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff6b8b", "#ff85a2", "#ffffff"]
      });
    }, 250);

    // Burst 3 (delayed)
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff6b8b", "#ff85a2", "#ffffff"]
      });
    }, 400);
  }
}
