// ===== МОБИЛЬНОЕ МЕНЮ =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('active'));
}

// ===== КАРУСЕЛЬ =====
const slides = document.querySelectorAll('.slide');
let current = 0;

if (slides.length > 0) {
    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    // Автопрокрутка каждые 5 секунд
    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 5000);
}

// ===== ОБРАБОТКА ФОРМЫ =====
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Остановить перезагрузку страницы
        alert('Заявка успешно отправлена. Специалист свяжется с вами в рабочее время.');
        form.reset(); // Очистить поля
    });
}