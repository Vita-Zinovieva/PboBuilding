let menu = document.querySelector('.menu-burger');
//console.log(menu);
let body = document.querySelector('body');
//console.log(body);
let headerMenu = document.querySelector('.header-menu');
//console.log(headerMenu);
let mobileMenu = document.querySelector('.menu-mobile');
//console.log(headerMenu);

/* menu.addEventListener('click', function(){
  menu.classList.toggle('active');
	headerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('lock');
}) */

menu.addEventListener('click', event => {
  event.preventDefault();
  menu.classList.toggle('active');
  headerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('lock');
});
