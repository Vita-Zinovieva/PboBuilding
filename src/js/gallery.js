import Swiper, { Navigation } from 'swiper';

document.addEventListener('scroll', handleProjectAnimation);
const buttonEls = document.querySelectorAll('[data-carousel-button]');

function handleProjectAnimation() {
  const gallerySection = document.querySelector('.gallery-section');
  const circulElements = document.querySelectorAll(
    '.projects-animation__circle'
  );

  const mySection = gallerySection.getBoundingClientRect();
  const isGallerySectionVisible =
    mySection.top + 200 < window.innerHeight && mySection.bottom - 100 >= 0;

  circulElements.forEach(item => {
    if (isGallerySectionVisible) {
      item.classList.add('active-projects-animation');
    } else {
      item.classList.remove('active-projects-animation');
    }
  });
}

const swiper = new Swiper('.projects-swiper', {
  modules: [Navigation],
  direction: 'horizontal',

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  speed: 400,
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    390: {
      slidesPerView: 1,
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 1,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
