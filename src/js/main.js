// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav);

document.addEventListener('DOMContentLoaded', function () {
  const langMenu = document.querySelector('.menu__lang');

  if (!langMenu) {
    return null
  }

  const langButton = document.querySelector('.menu__lang-selected');
  const langLinks = document.querySelectorAll('.menu__lang-link');
  const langSelectedText = document.querySelector('.menu__lang-selected-text span');

  // Открытие/закрытие меню при клике на кнопку
  langButton.addEventListener('click', function (event) {
    event.stopPropagation(); // предотвращаем всплытие события
    langMenu.classList.toggle('active');
  });

  // Закрытие меню при выборе пункта и обновление текста
  langLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // предотвращаем переход по ссылке
      const selectedLang = this.textContent; // получаем текст выбранного элемента
      langSelectedText.textContent = selectedLang; // обновляем текст в блоке
      langMenu.classList.remove('active'); // закрываем меню
    });
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', function (event) {
    if (!langMenu.contains(event.target)) {
      langMenu.classList.remove('active');
    }
  });
});


function partnersSlider() {
  const container = document.querySelector('.partners');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".partners__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".partners__slider-arrow-next",
      prevEl: ".partners__slider-arrow-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 80
      }
    }
  });
}


partnersSlider()
