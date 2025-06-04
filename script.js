document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-navigation');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Добавляет/удаляет класс 'active'
            
            // Для доступности: обновляем атрибут aria-expanded
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Дополнительно: Закрытие меню при клике на ссылку в мобильном меню (для одностраничников)
    const navLinks = mainNav.querySelectorAll('a');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) { // Если мобильное меню открыто
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
    // Код для мобильного меню (если он здесь)
    // ...

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');

        if (questionButton && answerDiv) {
            questionButton.addEventListener('click', () => {
                const isExpanded = questionButton.getAttribute('aria-expanded') === 'true' || false;

                // Закрыть все другие открытые ответы (опционально - для "классического" аккордеона)
                /*
                if (!isExpanded) { // Если текущий закрыт и мы его открываем
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            const otherQuestionButton = otherItem.querySelector('.faq-question');
                            const otherAnswerDiv = otherItem.querySelector('.faq-answer');
                            otherQuestionButton.classList.remove('active');
                            otherQuestionButton.setAttribute('aria-expanded', 'false');
                            otherAnswerDiv.classList.remove('active');
                            otherAnswerDiv.style.maxHeight = null; // Сбрасываем max-height
                               otherAnswerDiv.hidden = true; // Скрываем через атрибут
                        }
                    });
                }
                */

                // Переключаем состояние текущего элемента
                questionButton.classList.toggle('active');
                questionButton.setAttribute('aria-expanded', !isExpanded);
                
                answerDiv.classList.toggle('active');
                if (answerDiv.classList.contains('active')) {
                    answerDiv.hidden = false; // Убираем 'hidden', чтобы CSS transition сработал
                    answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                } else {
                    answerDiv.style.maxHeight = null; // Сбрасываем max-height для закрытия
                    // Можно добавить задержку перед установкой hidden, чтобы анимация успела пройти
                    setTimeout(() => {
                        if (!answerDiv.classList.contains('active')) { // Перепроверяем, если вдруг быстро кликнули снова
                             answerDiv.hidden = true;
                        }
                    }, 500); // 500ms - это длительность transition для max-height в CSS
                }
            });
        }
    });
});
});
