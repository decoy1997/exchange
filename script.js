document.addEventListener('DOMContentLoaded', function() {

    // --- СЛОВАРЬ ПЕРЕВОДОВ ---
    const translations = {
        // Украинский
        'uk': {
            'nav_home': 'Головна',
            'nav_about': 'Про мене',
            'nav_services': 'Послуги',
            'nav_testimonials': 'Відгуки',
            'nav_faq': 'FAQ',
            'nav_contact': 'Контакти',
            'hero_headline': 'Експертна допомога з індивідуальним підходом для кожного у світі IT та фінансів',
            'hero_subheadline': 'Навігація та адаптація у складному світі цифрових активів - ще не була такою простою.',
            'hero_cta': 'Отримати консультацію',
            'about_title': 'Мій досвід та підхід',
            'about_subtitle1': 'Мій шлях у світ фінансів та IT',
            'about_p1': 'Моє занурення у світ фінансів та IT почалося у 2019 році. З того часу я пройшов через безліч етапів: від першого навчання та реальної практики до глибокого аналізу ринкових злетів та падінь, включаючи такі знакові події, як обвал ринків під час пандемії COVID-19, історичне зростання та корекція Біткоїна, а також ажіотаж навколо акцій GameStop. Я був не просто спостерігачем, а й активним учасником, купуючи Bitcoin, Ethereum та Solana на їхніх локальних мінімумах. Понад вісім пройдених курсів та постійне прагнення до нових знань – це мій фундамент. Шлях до стабільного доходу не був простим і включав подолання значних втрат, що стало безцінним досвідом.',
            'about_subtitle2': 'Ключові принципи моєї роботи',
            'about_p2': 'В основі моєї роботи лежить індивідуальний підхід до кожного клієнта та прагнення зробити складні речі зрозумілими. Я адаптую інформацію під ваш рівень знань та цілі, чи то перші кроки у світі криптовалют, чи оптимізація існуючих стратегій. Особливу увагу я приділяю питанням безпеки та управління ризиками, допомагаючи вам орієнтуватися у мінливому середовищі цифрових активів та уникати потенційних загроз. Чесність та прозорість – не просто слова, а основа довірчих відносин.',
            'about_subtitle3': 'Що ви отримуєте, працюючи зі мною',
            'about_p3': 'Звертаючись до мене, ви отримуєте доступ до широкого спектру знань, підкріплених реальним багаторічним досвідом. Я вільно консультую українською, російською та англійською мовами, що дозволяє нам спілкуватися без бар\'єрів. Мій досвід включає не тільки технічні аспекти трейдингу та інвестицій, а й розуміння психології ринку, а також навички адаптації до різних культурних та економічних контекстів, набуті завдяки численним подорожам. Я допоможу вам не просто отримати інформацію, а виробити практичні навички для впевненої роботи на фінансових ринках та в IT-проектах.',
            'services_title': 'Напрямки консультацій',
            'services_card1_title': 'Старт у світі криптовалют',
            'services_card1_desc': 'Допоможу безпечно увійти у світ цифрових активів: від реєстрації на біржах та вибору гаманців до здійснення перших угод з купівлі та продажу криптовалют.',
            'services_card2_title': 'Трейдинг та робота на криптобіржах',
            'services_card2_desc': 'Консультації щодо ефективної роботи на біржах: P2P-торгівля, спот, ф\'ючерси (стоп-лоси, тейк-профіти, ордери), використання плеча, а також методи введення/виведення коштів (картка, SEPA, SWIFT).',
            'services_card3_title': 'Супровід ФОП та податки',
            'services_card3_desc': 'Повна підтримка для підприємців (ФОП): допомога у відкритті рахунків, підготовці необхідної документації, консультації щодо податкової системи та звітності, включаючи специфіку роботи з біржами.',
            'services_card4_title': 'Інвестиції через Interactive Brokers',
            'services_card4_desc': 'Консультації щодо роботи з платформою Interactive Brokers: торгівля акціями, валютними парами (Forex), ETF, опціонами та іншими фінансовими інструментами.',
            'services_card5_title': 'IT-консалтинг та обробка даних',
            'services_card5_desc': 'Надання консультаційних послуг у сфері комп\'ютерних технологій, обробки даних, хостингу та інших інформаційних сервісів для оптимізації ваших IT-процесів.',
            'services_card6_title': 'Безпека та управління ризиками',
            'services_card6_desc': 'Допоможу виявити та мінімізувати ризики на фінансових ринках, криптобіржах та в P2P-операціях. Навчу запобігати скаму та захищати ваші активи у цифровому просторі.',
            'testimonials_title': 'Відгуки Клієнтів',
            'testimonials_summary': 'І ще понад 640 позитивних відгуків на провідних платформах! Дізнайтеся більше, зв\'язавшись з нами.',
            'faq_title': 'FAQ',
            'faq1_q': 'Як проходить перша консультація?',
            'faq1_a': 'Початкова консультація, залежно від запиту, триває до однієї години.',
            'faq2_q': 'Як визначається вартість ваших послуг?',
            'faq2_a': 'Вартість послуг залежить від індивідуального підходу, складності вашого запиту та часу, необхідного для розробки персонального плану.',
            'faq3_q': 'Для кого підходять ваші консультації та в чому їхня перевага?',
            'faq3_a': 'Я працюю як з новачками, так і з досвідченими професіоналами. Ключова перевага – це індивідуальний підхід та економія вашого часу: ви отримуєте структуровану, адаптовану під вас інформацію, позбавляючи себе необхідності багатогодинного самостійного вивчення різних джерел.',
            'contact_title': 'Зв\'яжіться зі мною',
            'contact_intro': 'Якщо у вас є запитання або ви готові почати роботу, скористайтеся формою нижче або зв\'яжіться зі мною напряму через зручний для вас канал.',
            'form_name': 'Ваше ім\'я',
            'form_email': 'Ваш Email',
            'form_message': 'Ваше повідомлення',
            'form_submit': 'Відправити',
            'footer_copyright': '&copy; 2025 Decoy Exchange. Всі права захищено.'
        },
        // Английский
        'en': {
            'nav_home': 'Home',
            'nav_about': 'About Me',
            'nav_services': 'Services',
            'nav_testimonials': 'Testimonials',
            'nav_faq': 'FAQ',
            'nav_contact': 'Contact',
            'hero_headline': 'Expert help with an individual approach for everyone in the world of IT and finance',
            'hero_subheadline': 'Navigating and adapting in the complex world of digital assets has never been so simple.',
            'hero_cta': 'Get a Consultation',
            'about_title': 'My Experience and Approach',
            'about_subtitle1': 'My Journey into Finance and IT',
            'about_p1': 'My immersion into the world of finance and IT began in 2019. Since then, I have gone through numerous stages: from initial training and real practice to in-depth analysis of market rises and falls, including such significant events as the market crash during the COVID-19 pandemic, the historic rise and correction of Bitcoin, and the excitement around GameStop stocks. I was not just an observer but an active participant, buying Bitcoin, Ethereum, and Solana at their local lows. Over eight completed courses and a constant drive for new knowledge are my foundation. The path to stable income was not easy and involved overcoming significant losses, which became an invaluable experience.',
            'about_subtitle2': 'Key Principles of My Work',
            'about_p2': 'At the core of my work is an individual approach to each client and a desire to make complex things understandable. I adapt information to your level of knowledge and goals, whether it\'s taking the first steps in the world of cryptocurrencies or optimizing existing strategies. I pay special attention to security and risk management, helping you navigate the volatile environment of digital assets and avoid potential threats. Honesty and transparency are not just words, but the foundation of a trusting relationship.',
            'about_subtitle3': 'What You Get by Working with Me',
            'about_p3': 'By contacting me, you get access to a wide range of knowledge backed by real multi-year experience. I consult freely in Ukrainian, Russian, and English, which allows us to communicate without barriers. My experience includes not only the technical aspects of trading and investment but also an understanding of market psychology and skills in adapting to different cultural and economic contexts, gained through numerous travels. I will help you not just get information, but develop practical skills for confident work in the financial markets and IT projects.',
            'services_title': 'Consultation Areas',
            'services_card1_title': 'Getting Started in Crypto',
            'services_card1_desc': 'I will help you safely enter the world of digital assets: from registering on exchanges and choosing wallets to making your first crypto purchase and sale transactions.',
            'services_card2_title': 'Trading and Working on Crypto Exchanges',
            'services_card2_desc': 'Consultations on effective work on exchanges: P2P trading, spot, futures (stop-loss, take-profit, orders), use of leverage, as well as methods of depositing/withdrawing funds (card, SEPA, SWIFT).',
            'services_card3_title': 'Support for Private Entrepreneurs & Taxes',
            'services_card3_desc': 'Full support for private entrepreneurs (FOP): assistance in opening accounts, preparing necessary documentation, consultations on the tax system and reporting, including the specifics of working with exchanges.',
            'services_card4_title': 'Investing via Interactive Brokers',
            'services_card4_desc': 'Consultations on working with the Interactive Brokers platform: trading stocks, currency pairs (Forex), ETFs, options, and other financial instruments.',
            'services_card5_title': 'IT Consulting and Data Processing',
            'services_card5_desc': 'Providing consulting services in the field of computer technologies, data processing, hosting, and other information services to optimize your IT processes.',
            'services_card6_title': 'Security and Risk Management',
            'services_card6_desc': 'I will help identify and minimize risks in financial markets, on crypto exchanges, and in P2P operations. I will teach you how to prevent scams and protect your assets in the digital space.',
            'testimonials_title': 'Client Testimonials',
            'testimonials_summary': 'And over 640 more positive reviews on leading platforms! Find out more by contacting us.',
            'faq_title': 'FAQ',
            'faq1_q': 'How does the first consultation go?',
            'faq1_a': 'The initial consultation, depending on the request, lasts up to one hour.',
            'faq2_q': 'How is the cost of your services determined?',
            'faq2_a': 'The cost of services depends on the individual approach, the complexity of your request, and the time required to develop a personal plan.',
            'faq3_q': 'Who are your consultations for and what is their advantage?',
            'faq3_a': 'I work with both beginners and experienced professionals. The key advantage is an individual approach and saving your time: you receive structured information adapted for you, saving yourself from hours of independent study of various sources.',
            'contact_title': 'Contact Me',
            'contact_intro': 'If you have questions or are ready to get started, use the form below or contact me directly through a channel convenient for you.',
            'form_name': 'Your Name',
            'form_email': 'Your Email',
            'form_message': 'Your Message',
            'form_submit': 'Submit',
            'footer_copyright': '&copy; 2025 Decoy Exchange. All rights reserved.'
        }
    };

    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ ---
    const langSwitcher = document.querySelector('.language-switcher');
    const langOptions = document.querySelectorAll('.lang-option');
    const translatableElements = document.querySelectorAll('[data-translate-key]');

    langSwitcher.addEventListener('click', (event) => {
        event.preventDefault();
        const clickedLang = event.target.closest('.lang-option');
        if (!clickedLang || clickedLang.classList.contains('active')) {
            return; // Не делаем ничего, если клик не по кнопке или по уже активной
        }

        const lang = clickedLang.dataset.lang;

        // Переводим все элементы
        translatableElements.forEach(element => {
            const key = element.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // Используем innerHTML чтобы теги типа &copy; работали
            }
        });
        
        // Обновляем атрибут lang у тега <html>
        document.documentElement.lang = lang;

        // Обновляем активный класс
        langOptions.forEach(option => {
            option.classList.remove('active');
        });
        clickedLang.classList.add('active');
    });


    // --- КОД ДЛЯ МОБИЛЬНОГО МЕНЮ ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-navigation');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        const navLinks = mainNav.querySelectorAll('a');
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    if (mainNav.classList.contains('active')) {
                        event.preventDefault(); 
                        const targetId = link.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        mainNav.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        setTimeout(() => {
                            if (targetElement) {
                                targetElement.scrollIntoView();
                            }
                        }, 300);
                    }
                });
            });
        }
    }

    // --- КОД ДЛЯ FAQ АККОРДЕОНА ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');

        if (questionButton && answerDiv) {
            questionButton.addEventListener('click', () => {
                const isExpanded = questionButton.getAttribute('aria-expanded') === 'true' || false;
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
    });

});
