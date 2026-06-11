// Этот код запустится в любом случае, даже если файл подключен в самом верху страницы
function initReviews() {
  const expandButtons = document.querySelectorAll('.review-expand-btn');

  expandButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // Отменяем любые стандартные действия браузера
      
      const card = this.closest('.review-card');
      if (!card) return; // Защита от ошибок, если структура нарушена

      // Переключаем класс раскрытия
      card.classList.toggle('expanded');
      
      // Меняем текст кнопки
      if (card.classList.contains('expanded')) {
        this.textContent = 'Свернуть';
      } else {
        this.textContent = 'Читать далее';
      }
    });
  });
}

// Проверяем, загрузился ли DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviews);
} else {
  initReviews();
}