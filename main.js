// 1. SLAYDER FUNKSIYASI
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function showSlide(index) {
    // Hammasidan active klassini olib tashlash
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Indexni hisoblash (aylanma qilish)
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    
    
    // Yangi slaydga active klassini qo'shish
    slides[currentIndex].classList.add('active');
}


// Tugmalarni bosganda
if (nextBtn && prevBtn) {
    nextBtn.onclick = () => showSlide(currentIndex + 1);
    prevBtn.onclick = () => showSlide(currentIndex - 1);
}

// Avtomatik aylanish (5 soniya)
setInterval(() => showSlide(currentIndex + 1), 5000);


// 2. MOBIL MENYU (Toggle)
const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('nav-links-container');

if (menuBtn && menu) {
    menuBtn.onclick = function() {
        menu.classList.toggle('show-menu');
    };
}


// 3. QIDIRUV MODAL
const searchIcon = document.querySelector('.fa-search');
const searchModal = document.getElementById('search-modal');
const closeSearch = document.getElementById('close-search');

if (searchIcon && searchModal) {
    searchIcon.parentElement.onclick = function(e) {
        e.preventDefault();
        searchModal.classList.add('search-open');
    };
}

if (closeSearch) {
    closeSearch.onclick = () => searchModal.classList.remove('search-open');
}

window.onclick = function(event) {
    if (event.target == searchModal) {
        searchModal.classList.remove('search-open');
    }
};