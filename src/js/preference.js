
document.addEventListener('scroll', preferenceAnimation);

function preferenceAnimation() {
  const preferenceSection = document.getElementById('why-we');
  const mooveElements = document.querySelectorAll('.preference-animation__circul');
 
  const mySection = preferenceSection.getBoundingClientRect();
  const isPreferenceSectionVisible =
    mySection.top + 200 < window.innerHeight && mySection.bottom - 100 >= 0;

  mooveElements.forEach(item => {
    if (isPreferenceSectionVisible) {
      item.classList.add('preference__active-circul');
    } else {
      item.classList.remove('preference__active-circul');
    }
  });
};

