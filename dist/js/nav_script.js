
const hamburger = document.querySelector(".hamburger");

hamburger.onclick = ()=>{
const closeBtn = document.querySelector(".close");
const navBar = document.querySelector('.navbar');
const navBarMenu = document.querySelector('.navbar__menu');

hamburger.classList.toggle('open');
navBar.classList.toggle('open');
closeBtn.classList.toggle('open');
navBarMenu.classList.toggle('open');
};
