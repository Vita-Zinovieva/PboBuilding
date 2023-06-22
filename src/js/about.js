import startAnimation from './startAnimation';

const animationAboutTitle = () => {
  startAnimation('about', '.circle_title', 'activate_animation');
};

document.addEventListener('scroll', animationAboutTitle);
