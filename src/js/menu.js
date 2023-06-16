let menu = document.querySelector('.menu-burger');
//console.log(menu);
let body = document.querySelector('body');
//console.log(body);
let headerMenu = document.querySelector('.header-menu');
//console.log(headerMenu);
let mobileMenu = document.querySelector('.menu-mobile');
//console.log(headerMenu);

menu.addEventListener('click', event => {
  event.preventDefault();
  menu.classList.toggle('active');
  headerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('lock');
});

//відкриття форми

let closeButton = document.querySelector('#close');
console.log(closeButton);
let sendButton = document.querySelector('#send');
console.log(sendButton);
let headerBtnOpenform = document.querySelector('#btn');
console.log(headerBtnOpenform);
let formSend = document.querySelector('.form-send');
console.log(formSend);

headerBtnOpenform.addEventListener('click', event => {
  event.preventDefault();
  formSend.classList.add('show');
});

closeButton.addEventListener('click', event => {
  event.preventDefault();
  formSend.classList.remove('show');
  formSend.classList.add('hide');
});
sendButton.addEventListener('click', event => {//додати выдправку на пошту
  event.preventDefault();
  formSend.classList.remove('show');
  formSend.classList.add('hide');
});