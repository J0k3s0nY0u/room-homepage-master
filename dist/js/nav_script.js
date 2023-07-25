
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');
const menu = document.querySelector('.navbar__menu');
const navList = document.querySelector('.navbar__list');

let showMenu = false;

hamburger.addEventListener('click', toggleNav);

toggleNav = ()=>{
  if(showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menu.classList.add('open');
    navList.classList.add('open');
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menu.classList.remove('open');
    navList.classList.remove('open');
  }
};
