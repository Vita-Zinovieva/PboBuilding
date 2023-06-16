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

const servicesEl = document.querySelector('.servicesWrapper');
const modalEl = document.querySelector('.modalWrapper');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

servicesEl.addEventListener('click', handleBtnClick);

createServicesMurkup();

window.onresize = handleScreenWidthCange;

function handleScreenWidthCange(e) {
  createServicesMurkup();
}

function handleBtnClick(e) {
  if (!e.target.classList.contains('btn')) {
    return;
  }
  const id = +e.target.dataset.id;
  const service = servicesData.find(item => item.id === id);
  const markup = `<p>${service.description}</p>
      <img src="${servicesImages[service.id - 1]}" alt="${
    service.title
  }" width="358" height="129">
`;
  toggleModal();
  modalEl.innerHTML = markup;
  closeModalBtn.addEventListener('click', toggleModal);
}

function toggleModal() {
  modal.classList.toggle('backdrop--is-hidden');
  document.body.classList.toggle('scroll-lock');
}

function createServicesMurkup() {
  let servicesMurkup;
  if (window.innerWidth >= 1440) {
    servicesMurkup = servicesData.map(item => {
      return `<div class="serviceWrapper">
            <details>
              <summary class="summary">
                <p>
                  <span class="numbering">0${item.id}.</span>
                  <span>${item.title}</span>​
                </p>
              </summary>
              <div class="serviceInner">
                <p class="description">${item.description}</p>
              </div>
              <img
                src="${servicesImages[item.id - 1]}"
                alt="${item.title}"
              />
            </details>
            <span class="underLine"></span>
          </div>`;
    });
  } else {
    servicesMurkup = servicesData.map(item => {
      return `<div
              class="inner"
              style="
                background-image: linear-gradient(
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
                ),
                url(${servicesImages[item.id - 1]});
              "
            >
              <button class="btn"
              data-id="${item.id}"
              >
              ${item.title}
              ​</button>
            </div>`;
    });
  }

  servicesEl.innerHTML = servicesMurkup;
}
