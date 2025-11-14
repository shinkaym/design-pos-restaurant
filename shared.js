// Shared Functions - Used by all pages (login, register, order, reservation)

// ===== Navigation Popup Functions (ALL PAGES) =====
function toggleNavPopup() {
    const popup = document.getElementById('navPopup');
    const overlay = document.getElementById('navOverlay');
    popup.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeNavPopup() {
    const popup = document.getElementById('navPopup');
    const overlay = document.getElementById('navOverlay');
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

// ===== Modal Functions (order.html, reservation.html) =====
function closeNoteModal() {
    document.getElementById('noteModal').classList.remove('active');
}

function closePrintModal() {
    document.getElementById('printModal').classList.remove('active');
}

// ===== Form Validation Helpers (login.html, register.html) =====
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// ===== Initialize shared event listeners (ALL PAGES) =====
document.addEventListener('DOMContentLoaded', function() {
    // Close popup when clicking overlay
    const overlay = document.getElementById('navOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeNavPopup);
    }

    // Close popup when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNavPopup();
    });
});
