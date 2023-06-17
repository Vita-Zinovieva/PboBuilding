let menu = document.querySelector('.menu-burger');
let body = document.querySelector('body');
let headerMenu = document.querySelector('.header-menu');
let mobileMenu = document.querySelector('.menu-mobile');


menu.addEventListener('click', event => {
  event.preventDefault();
  menu.classList.toggle('active');
  headerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('lock');
});

//Validation input form
/* (function(){
let input = document.querySelector('.input');
console.log(input);
let form  = document.querySelector('form');
console.log(form);

let elem               = document.createElement('div');
      elem.id            = 'notify';
      elem.style.display = 'none';

      form.appendChild(elem);

  input.addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
      input.className    = 'invalid animated shake';
      elem.textContent   = 'Username should only contain lowercase letters e.g. john';
      elem.className     = 'error';
      elem.style.display = 'block';
    }
  });

  input.addEventListener('input', function(event){
    if ( 'block' === elem.style.display ) {
      input.className = '';
      elem.style.display = 'none';
    }
  });

})(); 
 */

//відкриття форми

let closeButton = document.querySelector('#close');
let sendButton = document.querySelector('#send');
let headerBtnOpenform = document.querySelector('#btn');
let formSend = document.querySelector('.form-send');

headerBtnOpenform.addEventListener('click', event => {
  event.preventDefault();
  formSend.classList.add('show');
});

closeButton.addEventListener('click', event => {
  event.preventDefault();
  formSend.classList.remove('show');
  formSend.classList.add('hide');
});
sendButton.addEventListener('submit', event => {
  event.preventDefault();
  
  formSend.classList.remove('show');
  formSend.classList.add('hide');
  sendMessage(form);
});

//function send message form

async function sendMessage(form) {
  const formData = new formData(form);
  if (formData){
    const url = 'sendmessage.php';
    const response = await fetch(url,{
      method:"POST",
      body:formData
    });
    if (response.ok){
      formSend.reset();
      alert('Form sent');
    } else {
      alert ('Eror');
    } 
   }
}

