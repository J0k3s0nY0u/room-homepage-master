
hamburger = document.querySelector('.hamburger');
hamburger.onClick = ()=>{
    navBar = document.querySelector('.navbar');
    navBar.classList.toggle('active');
}

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