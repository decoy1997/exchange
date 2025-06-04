document.addEventListener('DOMContentLoaded', function() {
    // --- Код для мобильного меню ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-navigation');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Добавляет/удаляет класс 'active'
            
            // Для доступности: обновляем атрибут aria-expanded
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Дополнительно: Закрытие меню при клике на ссылку в мобильном меню (для одностраничников)
        const navLinks = mainNav.querySelectorAll('a'); // Убедитесь, что mainNav здесь доступен
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
    } // Конец if (menuToggle && mainNav)

    // --- Код для FAQ Accordion ---
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
                            if (otherQuestionButton && otherAnswerDiv) { // Добавил проверку
                                otherQuestionButton.classList.remove('active');
                                otherQuestionButton.setAttribute('aria-expanded', 'false');
                                otherAnswerDiv.classList.remove('active');
                                otherAnswerDiv.style.maxHeight = null;
                                otherAnswerDiv.hidden = true;
                            }
                        }
                    });
                }
                */

                // Переключаем состояние текущего элемента
                questionButton.classList.toggle('active');
                questionButton.setAttribute('aria-expanded', !isExpanded);
                
                answerDiv.classList.toggle('active');
                if (answerDiv.classList.contains('active')) {
                    answerDiv.hidden = false; 
                    answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                } else {
                    answerDiv.style.maxHeight = null; 
                    setTimeout(() => {
                        if (!answerDiv.classList.contains('active')) { 
                             answerDiv.hidden = true;
                        }
                    }, 500); 
                }
            });
        }
    }); // Конец faqItems.forEach

}); // <-- Конец ЕДИНСТВЕННОГО обработчика DOMContentLoaded
