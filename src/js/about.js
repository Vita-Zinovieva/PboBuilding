document.addEventListener('scroll', function () {
  var aboutSection = document.getElementById('about');
  var circulElements = document.querySelectorAll('.circul');

  var mySection = aboutSection.getBoundingClientRect();
  var isAboutSectionVisible =
    mySection.top + 200 < window.innerHeight && mySection.bottom - 100 >= 0;

  circulElements.forEach(item => {
    if (isAboutSectionVisible) {
      item.classList.add('activate_animation');
    } else {
      item.classList.remove('activate_animation');
    }
  });
});

// Возвращаемое значение метода getBoundingClientRect() является объектом DOMRect,
//который содержит следующие свойства:

// top: Верхняя граница элемента относительно верхней границы окна просмотра.
// right: Правая граница элемента относительно левой границы окна просмотра.
// bottom: Нижняя граница элемента относительно верхней границы окна просмотра.
// left: Левая граница элемента относительно левой границы окна просмотра.
// width: Ширина элемента.
// height: Высота элемента.

// window.innerHeight - это свойство объекта window в браузерном JavaScript,
//которое возвращает высоту окна просмотра(внутреннюю высоту окна браузера) в пикселях.

// Далее я сравнил top c window.innerHeight и когда ещз стал меньше то добавил стили
