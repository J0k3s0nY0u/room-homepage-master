
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('navbar');
const menu = document.querySelector('navbar__menu');
const navList = document.querySelector('navbar__list');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Auto Play
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });