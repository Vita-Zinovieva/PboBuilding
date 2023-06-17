import { servicesData } from './servicesData';
import services1 from '../images/section-photo/services/services1@1x.jpg';
import services2 from '../images/section-photo/services/services2@1x.jpg';
import services3 from '../images/section-photo/services/services3@1x.jpg';
import services4 from '../images/section-photo/services/services4@1x.jpg';
import services5 from '../images/section-photo/services/services5@1x.jpg';
import services6 from '../images/section-photo/services/services6@1x.jpg';
import services7 from '../images/section-photo/services/services7@1x.jpg';
import services8 from '../images/section-photo/services/services8@1x.jpg';

const servicesImages = [
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
  services7,
  services8,
];

const servicesEl = document.querySelector('.mobile-services-wrapper');
const modalEl = document.querySelector('.modal-wrapper');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

servicesEl.addEventListener('click', handleBtnClick);
document.addEventListener('scroll', handleAnimation);

// createServicesMurkup();

// window.onresize = handleScreenWidthCange;

// function handleScreenWidthCange(e) {
//   createServicesMurkup();
// }

function handleBtnClick(e) {
  if (!e.target.classList.contains('services-btn')) {
    return;
  }
  const id = +e.target.dataset.id;
  const service = servicesData.find(item => item.id === id);
  const markup = `<div class="services-modal-inner">
      <p class="services-modal-description">${service.description}</p>
      <img src="${servicesImages[service.id - 1]}" alt="${
    service.title
  }" width="358" height="129" class="services-modal-img">
  </div>
`;
  handleModalOpen();
  modalEl.innerHTML = markup;
  closeModalBtn.addEventListener('click', handleModalClose);
}

function handleModalOpen() {
  modal.classList.remove('backdrop--is-hidden');
  document.body.addEventListener('keydown', handleClose);
  document.body.classList.add('overflow');
}

function handleModalClose() {
  modal.classList.add('backdrop--is-hidden');
  document.body.removeEventListener('keydown', handleClose);
  document.body.classList.remove('overflow');
}

const handleClose = ({ target, currentTarget, code }) => {
  // console.log('target, currentTarget, code', target, currentTarget, code)
  if (target === currentTarget || code === 'Escape') {
    handleModalClose();
  }
};

// function createServicesMurkup() {
//   let servicesMurkup;
//   if (window.innerWidth >= 1440) {
//     servicesMurkup = servicesData.map((item) => {
//       return `<li class="service-wrapper">
//             <details>
//               <summary class="summary">
//                 <p>
//                   <span class="numbering">0${item.id}.</span>
//                   <span>${item.title}</span>​
//                 </p>
//               </summary>
//               <div class="service-inner">
//                 <p class="service-description">${item.description}</p>
//               </div>
//               <img
//               class="service-img"
//                 src="${servicesImages[item.id - 1]}"
//                 alt="${item.title}"
//               />
//             </details>
//             <span class="service-underline"></span>
//           </li>`;
//     });
//   } else {
//     servicesMurkup = servicesData.map((item) => {
//       return `<li
//               class="service-inner-mobile"
//               style="
//                 background-image: linear-gradient(
//                 rgba(0, 0, 0, 0.7),
//                 rgba(0, 0, 0, 0.7)
//                 ),
//                 url(${servicesImages[item.id - 1]});
//               "
//             >
//               <button class="services-btn"
//               data-id="${item.id}"
//               >
//               ${item.title}
//               ​</button>
//             </li>`;
//     });
//   }

//   servicesEl.innerHTML = servicesMurkup;
// }

function handleAnimation() {
  const servicesSection = document.querySelector('.services-section');
  const circulElements = document.querySelectorAll(
    '.services-animation__circul'
  );

  const mySection = servicesSection.getBoundingClientRect();
  const isServicesSectionVisible =
    mySection.top + 200 < window.innerHeight && mySection.bottom - 100 >= 0;

  circulElements.forEach(item => {
    if (isServicesSectionVisible) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
