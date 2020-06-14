/*document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close')
  const switchModal = () => {
    modal.classList.toggle('modal--visible')
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal)

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
    modalAnswer = $('.modal-answer'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    closeBtnAnswer = $('.modal-answer__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  closeBtnAnswer.on('click', function () {
    modalAnswer.toggleClass('modal-answer_visible');
  });
  // закрытие модального окна нажатием на кнопку Esc
  $(document).keydown(function (e) {
    if (e.code == 'Escape') {
      modal.removeClass('modal_visible');
      modalAnswer.removeClass('modal-answer_visible');
    };
  });
  // закрытие модального окна при нажатие на любое место вне его
  $(document).on('click', function (e) {
    if (modal.is(e.target)) {
      modal.removeClass('modal_visible');
    };
  });
  // закрытие модального окна при нажатие на любое место вне его
  $(document).on('click', function (e) {
    if (modalAnswer.is(e.target)) {
      modalAnswer.removeClass('modal-answer_visible');
    };
  });


    //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)
  

  
  // выбирает тег БАДИ и вставляем перед закрывающим тегом нашу кнопку
  $( 'body' ).append( '<button id="toTop" title="Go to top"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI4NC45MjkgMjg0LjkyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg0LjkyOSAyODQuOTI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Mi4wODIsMTk1LjI4NUwxNDkuMDI4LDYyLjI0Yy0xLjkwMS0xLjkwMy00LjA4OC0yLjg1Ni02LjU2Mi0yLjg1NnMtNC42NjUsMC45NTMtNi41NjcsMi44NTZMMi44NTYsMTk1LjI4NSAgIEMwLjk1LDE5Ny4xOTEsMCwxOTkuMzc4LDAsMjAxLjg1M2MwLDIuNDc0LDAuOTUzLDQuNjY0LDIuODU2LDYuNTY2bDE0LjI3MiwxNC4yNzFjMS45MDMsMS45MDMsNC4wOTMsMi44NTQsNi41NjcsMi44NTQgICBjMi40NzQsMCw0LjY2NC0wLjk1MSw2LjU2Ny0yLjg1NGwxMTIuMjA0LTExMi4yMDJsMTEyLjIwOCwxMTIuMjA5YzEuOTAyLDEuOTAzLDQuMDkzLDIuODQ4LDYuNTYzLDIuODQ4ICAgYzIuNDc4LDAsNC42NjgtMC45NTEsNi41Ny0yLjg0OGwxNC4yNzQtMTQuMjc3YzEuOTAyLTEuOTAyLDIuODQ3LTQuMDkzLDIuODQ3LTYuNTY2ICAgQzI4NC45MjksMTk5LjM3OCwyODMuOTg0LDE5Ny4xODgsMjgyLjA4MiwxOTUuMjg1eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></button>' );
   // Добавляем к нашей кнопке стили (CSS)
   $("#toTop").css({"display": "none", "position": "fixed", "bottom": "18px", "right": "18px", "z-index": "1000", "border": "none", "outline": "none", "background": "none", "cursor": "pointer"});
   // В момент скрола в окне показываем или скрываем нашу кнопку
   $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
     }
  });
  // Вешаем функцию-обработчик на действие по клику по нашей кнопке
  $('#toTop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 800); // задаем анимацию, плавность
    return false;
  });
  

  new WOW().init(); // CSS АНИМАЦИЯ 

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength:"Имя не короче двух букв"
      }, 
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  //маска для номера телофона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

  // создание yandex карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.716970, 37.500818],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});

});
