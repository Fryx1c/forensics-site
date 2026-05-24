document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Бургер меню
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    if (burger) {
        burger.addEventListener('click', () => nav.classList.toggle('active'));
    }

    // 2. Подсветка активной ссылки (ИСПРАВЛЕНО)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. ТЕМНАЯ ТЕМА (справа снизу)
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Проверяем сохраненную тему
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = '☀️';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeBtn.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeBtn.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 4. Обработка формы
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Ваша заявка принята! (Демонстрация формы)');
            form.reset();
        });
    }
});