$(document).ready(function() {
    var translations = {
      'en': {
        'title': 'Stand out from your competitors',
        'change': ['Global', 'Local', 'Social'],
        'end': 'ly',
        'button': 'Contact us',
        'intro-ttl1': 'Paid advertising ',
        'intro-ttl2': 'Social media management',
        'intro-ttl3': 'Email marketing',
        'intro-dttl1': 'Boost your reach with paid advertising.',
        'intro-dttl2': 'Highlight your presence on social media.',
        'intro-dttl3': 'Increase your conversions with email marketing',
        'art': 'About us',
        'about-title': 'Trian Agency: Strategic Marketing Experts',
        'about-text': 'Trian Agency is a specialized agency that provides a wide range of services in the marketing field to help companies achieve their goals.',
        'clients': 'Clients',
        'form1': 'Get in touch with us',
        'form2': 'We´re here to enhance your marketing strategies', 
        'f-text1': 'Trian Agency is a specialized agency that provides a wide range of services in the marketing field to help companies achieve their goals.',
        'f-text2': 'COMPANY',
        'f-text3': 'CONTACTS',
        'f-a1': 'Home',
        'f-a2': 'About us',
        'f-a3': 'Clients',
        'f-a4': 'Contact',
      },
      'pt': {
        'title': 'Destaque-se dos seus concorrentes',
        'change': ['Global', 'Local', 'Social'],
        'end': 'mente',
        'button': 'Contacte-nos',
        'intro-ttl1': 'Publicidade paga',
        'intro-ttl2': 'Gerenciamento de mídia social',
        'intro-ttl3': 'Email marketing',
        'intro-dttl1': 'Potencialize o seu alcance com publicidade paga.',
        'intro-dttl2': 'Destaque a sua presença nas redes sociais.',
        'intro-dttl3': 'Aumente as suas conversões com email marketing.',
        'art': 'Sobre nós',
        'about-title': 'Trian Agency: Especialistas em Marketing Estratégico',
        'about-text': 'A Trian Agency é uma agência especializada em oferecer uma ampla gama de serviços na área de marketing para ajudar as empresas a alcançarem seus objetivos.',
        'clients': 'Clientes',
        'form1': 'Entre em contacto connosco',
        'form2': 'Estamos aqui para  melhorar as suas estratégias de marketing. ', 
        'f-text1': 'A Trian Agency é uma agência especializada em oferecer uma ampla gama de serviços na área de marketing para ajudar as empresas a alcançarem seus objetivos.',
        'f-text2': 'EMPRESA',
        'f-text3': 'CONTACTOS',
        'f-a1': 'Home',
        'f-a2': 'Sobre nós',
        'f-a3': 'Clientes',
        'f-a4': 'Contacto',
      }
    };
  
    // Получение текущего языка из localStorage или установка языка по умолчанию
    var currentLanguage = localStorage.getItem('language');
    if (!(currentLanguage in translations)) {
      currentLanguage = 'en'; // Установка языка по умолчанию
    }
  
    // Функция для перевода контента на выбранный язык
    function translateContent(lang) {
      $('[data-translation-key]').each(function() {
        var key = $(this).data('translation-key');
        $(this).text(translations[lang][key]);
      });
    }
  
    // Функция для добавления класса 'active' к активной ссылке на язык
    function setActiveLanguageLink(lang) {
      $('.language-link').removeClass('active');
      $('.language-link[data-lang="' + lang + '"]').addClass('active');
    }
  
    // Переменная для хранения текущего интервала
    var currentInterval;
  
    // Функция для динамического изменения слов каждую секунду
    function changeWords(lang) {
      var words = translations[lang]['change'];
      var currentWordIndex = 0;
  
      $('#change').text(words[currentWordIndex]); // Отобразить первое слово сразу при загрузке страницы
      currentWordIndex++;
  
      // Очищаем предыдущий интервал, если он существует
      clearInterval(currentInterval);
  
      currentInterval = setInterval(function() {
        $('#change').fadeOut(300, function() {
          $(this).text(words[currentWordIndex]).fadeIn(300);
        });
  
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }, 2000);
    }
  
    // Установка языка по умолчанию и перевод контента
    translateContent(currentLanguage);
    setActiveLanguageLink(currentLanguage);
  
    // Запуск функции для динамического изменения слов
    changeWords(currentLanguage);
  
    // Обработчик клика по ссылке на язык
    $('.language-link').click(function(e) {
      e.preventDefault();
      var lang = $(this).data('lang');
      translateContent(lang);
      setActiveLanguageLink(lang);
      changeWords(lang);
      localStorage.setItem('language', lang); // Сохранение выбранного языка в localStorage
    });
  });