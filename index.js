document.getElementById("moreInfoBtn").addEventListener("click", function() {
    alert("Дякуємо за інтерес до нашої школи! Більше інформації доступно на сторінці 'Про нас'.");
});

document.getElementById("contactForm").addEventListener("submit", function() {
    ;
    alert("Ваше повідомлення надіслано! Ми зв'яжемося з вами найближчим часом.");
});

window.onload = function() {
        // Перевіряємо, чи користувач зайшов з мобільного пристрою
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            alert("Зайдіть будь ласка з комп'ютера");
        }
    }
