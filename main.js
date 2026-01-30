// Slayderni 1 ga 1 ishlatish
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let current = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
}

next.addEventListener('click', () => showSlide(current + 1));
prev.addEventListener('click', () => showSlide(current - 1));

// Avtomatik aylanish (rasmda ko'rsatilganidek)
setInterval(() => showSlide(current + 1), 5000);

const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('nav-links-container');

if (btn) {
    btn.onclick = function() {
        menu.classList.toggle('show-menu');
        console.log("Menyu holati o'zgardi");
    };
}


// 1. Elementlarni tanlab olamiz
const searchIcon = document.querySelector('.fa-search').parentElement; // Ikonka turgan <a> tagi
const searchModal = document.getElementById('search-modal');
const closeSearch = document.getElementById('close-search');

// 2. Qidiruv ikonkasini bosganda ochish
searchIcon.onclick = function(e) {
    e.preventDefault(); // Sahifa tepaga sakrab ketmasligi uchun
    searchModal.classList.add('search-open');
};

// 3. "X" tugmasini bosganda yopish
closeSearch.onclick = function() {
    searchModal.classList.remove('search-open');
};

// 4. Fonni (bo'sh joyni) bosganda ham yopilsin:
window.onclick = function(event) {
    if (event.target == searchModal) {
        searchModal.classList.remove('search-open');
    }
};