document.addEventListener('DOMContentLoaded', function() {

    // --- КОД ДЛЯ МОБИЛЬНОГО МЕНЮ ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-navigation');

    if (menuToggle && mainNav) {
        // Обработчик для клика по иконке "бургер" (открыть/закрыть меню)
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Обработчик для кликов по ссылкам ВНУТРИ меню (для плавного скролла)
        const navLinks = mainNav.querySelectorAll('a');
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    // Этот код сработает только если мобильное меню было открыто
                    if (mainNav.classList.contains('active')) {
                        // 1. Отменяем стандартный мгновенный переход по ссылке
                        event.preventDefault();

                        // 2. Получаем ID цели (например, "#contact")
                        const targetId = link.getAttribute('href');
                        const targetElement = document.querySelector(targetId);

                        // 3. Закрываем меню (запускаем CSS-анимацию закрытия)
                        mainNav.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');

                        // 4. Ждем, пока анимация закрытия меню завершится (300ms, как в CSS)
                        setTimeout(() => {
                            if (targetElement) {
                                // 5. Плавно прокручиваем к цели
                                targetElement.scrollIntoView();
                            }
                        }, 300); // Задержка должна соответствовать времени transition в CSS
                    }
                });
            });
        }
    } // Конец блока if (menuToggle && mainNav)

    // --- КОД ДЛЯ FAQ АККОРДЕОНА ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');

        if (questionButton && answerDiv) {
            questionButton.addEventListener('click', () => {
                const isExpanded = questionButton.getAttribute('aria-expanded') === 'true' || false;

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
                    }, 500); // 500ms - это длительность transition для max-height в CSS
                }
            });
        }
    }); // Конец блока faqItems.forEach

}); // Конец обработчика DOMContentLoaded
