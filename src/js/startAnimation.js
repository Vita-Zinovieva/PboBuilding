const startAnimation = (sectionId, elementsName, className) => {
  const section = document.getElementById(sectionId);
  const elements = document.querySelectorAll(elementsName);

  const mySection = section.getBoundingClientRect();
  const isAboutSectionVisible =
    mySection.top + 200 < window.innerHeight && mySection.bottom - 100 >= 0;

  elements.forEach(item => {
    if (isAboutSectionVisible) {
      item.classList.add(className);
    } else {
      item.classList.remove(className);
    }
  });
};

export default startAnimation;

//В данную функцию нужно передать три аргумента :
// 1. id секции,
// 2. класс элемента на который будет вешаться анимация
// 3. имя класса

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
