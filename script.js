// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const navUl = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
  navUl.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

// Обработчик события для кнопки "Записаться на пробное занятие"
const bookingButton = document.querySelector('.button');
bookingButton.addEventListener('click', () => {
  const modal = document.getElementById('bookingModal');
  modal.style.display = "block";
});

// Закрытие модального окна
const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => {
 const modal = document.getElementById('bookingModal');
 modal.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
 const modal = document.getElementById('bookingModal');
 if (event.target === modal) {
  modal.style.display = "none";
 }
});

// Обработка формы (из предыдущего ответа)
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//  // ... (ваш код обработки формы) ...
// }

// function validateForm() {
//  // ... (ваш код валидации) ...
// }

// function isValidEmail(email) {
//  // ... (ваш код проверки email) ...
// }


// Инициализация Swiper после загрузки DOM

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        navigation: {
            nextEl: '.mySwiper .swiper-button-next',
            prevEl: '.mySwiper .swiper-button-prev',
        },
    });

    const swiper2 = new Swiper('.mySwiper2', {
        navigation: {
            nextEl: '.mySwiper2 .swiper-button-next',
            prevEl: '.mySwiper2 .swiper-button-prev',
        },
    });
});


