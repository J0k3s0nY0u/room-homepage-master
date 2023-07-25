
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navBar = document.querySelector('.navbar');
const menu = document.querySelector('.navbar__menu');
const navList = document.querySelector('.navbar__list');

let showMenu = true;

hamburger.onclick = toggleNav = ()=>{
  if(showMenu) {
    hamburger.classList.add('open');
    closeBtn.classList.add('open');
    navBar.classList.add('open');
    menu.classList.add('open');
    navList.classList.add('open');
  } else {
    hamburger.classList.remove('open');
    closeBtn.classList.remove('open');
    navBar.classList.remove('open');
    menu.classList.remove('open');
    navList.classList.remove('open');
  }
};
