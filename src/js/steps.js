import startAnimation from './startAnimation';

const animationCircleStart = () => {
  startAnimation('steps', '.steps_circle', 'animationCircle');
};

const animationTitleleStart = () => {
  startAnimation('steps', '.step_title', 'animationTitle');
};

document.addEventListener('scroll', animationCircleStart);
document.addEventListener('scroll', animationTitleleStart);
