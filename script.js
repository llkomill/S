document.querySelector('.refresh-btn').addEventListener('click', function() {
    const message = document.querySelector('.message');
    this.style.transform = 'rotate(360deg)';
    
    // Эффект мигания
    message.style.opacity = '0.5';
    setTimeout(() => {
        message.style.opacity = '1';
        this.style.transform = 'rotate(0deg)';
        message.textContent = 'Замен не найдено';
    }, 300);
});

// Тексты для разных языков
const translations = {
    ru: {
        message: "Замен не найдено",
        submessage: "толькоона."
    },
    en: {
        message: "No replacements found",
        submessage: "onlyher."
    },
    de: {
        message: "Kein Ersatz gefunden",
        submessage: "nur sie."
    }
};

// Текущий язык
let currentLang = 'ru';

// Функция обновления текста
function updateText() {
    document.querySelector('.message').textContent = translations[currentLang].message;
    document.querySelector('.submessage').textContent = translations[currentLang].submessage;
}

// Кнопка обновления
document.querySelector('.refresh-btn').addEventListener('click', function() {
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
        updateText(); // Обновляем текст при нажатии
    }, 300);
});

// Кнопки переключения языка
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
        
        // Добавляем активный класс текущей кнопке
        this.classList.add('active');
        
        // Устанавливаем текущий язык
        currentLang = this.dataset.lang;
        
        // Обновляем текст
        updateText();
    });
});