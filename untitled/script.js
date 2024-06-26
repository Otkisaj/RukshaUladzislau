import { LuParkingCircle } from "react-icons/lu";
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slides img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}
function butClick(){
    return +1;
};

// Автоматическая смена баннеров каждые 5 секунд
setInterval(nextSlide, 5000);

document.querySelectorAll('.banner-info button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Вы нажали кнопку: ${button.textContent}`);
    });
});



94,335