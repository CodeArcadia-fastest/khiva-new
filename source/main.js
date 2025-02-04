document.addEventListener("DOMContentLoaded", function() {
  // Блокируем прокрутку
  document.body.style.overflow = 'hidden';

  // Показываем анимацию загрузки
  document.querySelector('.loadings').style.display = 'flex';

  // Скрываем анимацию загрузки через 1 секунду (или по другой длительности)
  setTimeout(function() {
    document.querySelector('.loadings').style.display = 'none';
    // Разблокируем прокрутку
    document.body.style.overflow = 'auto';

    // После того как индикатор скрыт, запускаем анимацию чисел
    animateNumbers();

  }, 1000); // анимация загрузки длится 1 секунду
})
  
  // Функция анимации чисел
  function animateNumbers() {
    const targetNumber1 = 50;   // Для первого элемента
    const targetNumber2 = 1000; // Для второго элемента
    const targetNumber3 = 10;   // Для третьего элемента
  
    const numberElement1 = document.getElementById('animated-number-1');
    const numberElement2 = document.getElementById('animated-number-2');
    const numberElement3 = document.getElementById('animated-number-3');
  
    function animateNumber(element, targetNumber) {
      let start = 0;
      const duration = 2000; // продолжительность анимации в миллисекундах
      const stepTime = 50; // интервал обновления числа (в миллисекундах)
      const steps = duration / stepTime; // количество шагов
  
      const increment = targetNumber / steps; // прирост на каждом шаге
  
      const interval = setInterval(function() {
        start += increment;
        if (start >= targetNumber) {
          clearInterval(interval);
          element.textContent = targetNumber;
        } else {
          element.textContent = Math.floor(start); // округляем значение
        }
      }, stepTime);
    }
  
    // Запуск анимации для всех чисел после окончания анимации загрузки
    animateNumber(numberElement1, targetNumber1);
    animateNumber(numberElement2, targetNumber2);
    animateNumber(numberElement3, targetNumber3);
  }
  const suggestions = [
    { name: "“XUMBUZTEPA”", url: "/pages/xumbuztepa/index.html" },
    { name: "“SANDIQLI BOBO SHAHARCHASI”", url: "/xiva-t" },
    { name: "TUPROQQAL’A SHAHARCHASI”( Xazarasp tumani)", url: "/barcha-hududlar" },
    { name: "“MESHYEKLI KARVONSAROYI”", url: "/" },
    { name: "“TUPROQQAL’A SHAHARCHASI” (Shovot tumani)", url: "/login" },
    { name: "“CHINGIZ TEPA”", url: "/uz" },
    { name: "“OLMAOTISHGAN", url: "/uz" },
    { name: "“ICHAN QAL’ANING GʻARBIY QISMI O‘RTASIDAGI DEVOR”", url: "/uz" },
    { name: "“QIYOT SHAHARCHASI ” (Kat Qal’a)", url: "/uz" },
    { name: "“SARTAROSH KARVONSAROYI”", url: "/uz" },
    { name: "“TOSH QAL’A-2”", url: "/uz" },
    { name: "“VOYANGAN QAL’A”", url: "/uz" },
    { name: "“UCH-O‘CHOQ MOZOR QO‘RGʻONI”", url: "/uz" },
    { name: "“DOSH QAL’A-1 KARVONSAROYI”", url: "/uz" },
    { name: "“ASHIRMAT TEPA” qabriston", url: "/uz" },
    { name: "“XAZARASP QAL’ASI”", url: "/uz" },
    { name: "“QALAJIQ QAL’A”", url: "/uz" },
    { name: "“ICHAN QAL’A”( Xiva shahri)", url: "/uz" },
    { name: "“DESHON QAL’A”( Xiva shahri)", url: "/uz" },
    { name: "“ULLI HOVLI”", url: "/uz" },
    { name: "“OXUNLAR QO‘RGʻONI”", url: "/uz" },
    { name: "«OQ SHAYX BOBO TEPALIGI»<", url: "/uz" },
    { name: "«TOSH MACHIT»", url: "/uz" },
    { name: "“BOGʻI SHAMOL” - DALA HOVLISI", url: "/uz" },
    { name: "“ISLOM XO‘JA YOZGI QARORGOHI”", url: "/uz" },
    { name: "“MATVAFO KARVONBOSHI SAVDO UYI” va “MATVAFO KARVONBOSHI UYI”", url: "/uz" },
    { name: "“IBROXIM XO‘JA UYI”", url: "/uz" },
    { name: "“XUDOYBERGAN DEVONOV UYI”", url: "/uz" },
    { name: "“KICHIK MAMAT MARAM UYI”", url: "/uz" },
    { name: "“SHIXNAZARBOY UYI”", url: "/uz" },
    { name: "“OGAHIY UY MUZEYI”", url: "/uz" },
    { name: "“AVAZ O‘TAR UYI”", url: "/uz" },
    { name: "“TUNQOTARLAR UYI”", url: "/uz" },
    { name: "“OLLABERGAN GAVDAMBOY UYI”", url: "/uz" },
    { name: "“YANGIARIQDAGI PAXSA UY”", url: "/uz" },
    { name: "“OGAHIYDAGI PAXSA UY”", url: "/uz" },
  ];
  
  let selectedUrl = ""; // Для хранения выбранного URL
  
  function searchSuggestions() {
    const input = document.getElementById('searchInput');
    const list = document.getElementById('suggestionsList');
    const query = input.value.toLowerCase();
    
    // Очистить предыдущие предложения
    list.innerHTML = '';
  
    if (query.length > 0) {
      // Фильтровать предложения по введенному тексту
      const filteredSuggestions = suggestions.filter(suggestion => suggestion.name.toLowerCase().includes(query));
  
      // Показать найденные предложения
      filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = suggestion.name;
        li.onclick = () => selectSuggestion(suggestion); // Устанавливаем URL на выбранный элемент
        list.appendChild(li);
      });
  
      // Показать список предложений
      list.style.display = 'block';
    } else {
      // Скрыть список, если ничего не введено
      list.style.display = 'none';
    }
  }
  
  function selectSuggestion(suggestion) {
    const input = document.getElementById('searchInput');
    input.value = suggestion.name;
    selectedUrl = suggestion.url;  // Сохраняем URL выбранного элемента
    hideSuggestions();
  }
  
  function showSuggestions() {
    const list = document.getElementById('suggestionsList');
    list.style.display = 'block';
  }
  
  function hideSuggestions() {
    const list = document.getElementById('suggestionsList');
    setTimeout(() => {
      list.style.display = 'none';
    }, 200);  // Задержка для предотвращения исчезновения списка до выбора
  }
  
  // Обработчик на кнопку Search
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем обычное поведение формы
    if (selectedUrl) {
      window.open(selectedUrl, '_blank'); // Открываем ссылку в новой вкладке
    }
  });
  
  // Скрыть предложения при клике вне поля поиска
  document.addEventListener('click', function(event) {
    const input = document.getElementById('searchInput');
    const list = document.getElementById('suggestionsList');
    
    if (!input.contains(event.target) && !list.contains(event.target)) {
      hideSuggestions();
    }
  });
  