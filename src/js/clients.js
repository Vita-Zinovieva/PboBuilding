import Swiper, {Autoplay} from 'swiper';



const swiper = new Swiper('.swiper', {

  modules: [Autoplay],
  speed: 400,
  init: true,
  loop: true, 
  pagination: false,
  navigation: true,
  preventClicks: true,
  direction: 'horizontal', 

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor:true,
  freeMode: true,

  mousewheel:{
    sensitivity:1,
  },

  breakpoints: {
    390: {
      slidesPerView: 3,
      spaceBetween: 12,
    }, 
    
    768: {
      slidesPerView: 6,
      spaceBetween: 68,
    }}, 

    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: 	false,
      disableOnInteraction: false,	
      stopOnLastSlide: false,
    }

  
}); 













/* function Ant(crslId) {

  let id = document.getElementById(crslId);
    if(id) {
      this.crslRoot = id
    }
    else {
      this.crslRoot = document.querySelector('.ant-carousel')
    };
  
  // Carousel objects
  this.crslList = this.crslRoot.querySelector('.ant-carousel-list');
  this.crslElements = this.crslList.querySelectorAll('.ant-carousel-element');
  this.crslElemFirst = this.crslList.querySelector('.ant-carousel-element');
  
  // Initialization
  this.options = Ant.defaults;
  Ant.initialize(this)
  };
  
  Ant.defaults = {
    // Default options for the carousel
    elemVisible: 3, // Кол-во отображаемых элементов в карусели
    loop: true,     // Бесконечное зацикливание карусели 
    auto: true,     // Автоматическая прокрутка
    interval: 3000, // Интервал между прокруткой элементов (мс)
    speed: 850,     // Скорость анимации (мс)
    touch: true,    // Прокрутка  прикосновением
  };
  
  Ant.prototype.elemPrev = function(num) {
    num = num || 1;
    
    if(this.currentElement);
    this.currentElement -= num;
        
    if(!this.options.loop) {  // сдвиг вправо без цикла
      this.currentOffset += this.elemWidth*num;
      this.crslList.style.marginLeft = this.currentOffset + 'px';
      if(this.currentElement == 0) {
        this.touchPrev = false
      } this.touchNext = true
    }
    else {                    // сдвиг вправо с циклом
      let elm, buf, this$ = this;
      for(let i=0; i<num; i++) {
        elm = this.crslList.lastElementChild;
        buf = elm.cloneNode(true);
        this.crslList.insertBefore(buf, this.crslList.firstElementChild);
        this.crslList.removeChild(elm)
      };
      this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
      this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
    
      this.crslList.style.marginLeft = '0px';
      setTimeout(function() {
        this$.crslList.style.cssText = 'transition:none;'
      }, this.options.speed)
    }
  };
  
  Ant.prototype.elemNext = function(num) {
  num = num || 1;
    
    if(!this.options.loop) {  // сдвиг влево без цикла
      this.currentOffset -= this.elemWidth*num;
      this.crslList.style.marginLeft = this.currentOffset + 'px';
      console.log(marginLeft);
      if(this.currentElement == 0) {
        this.touchNext = false
      } this.touchPrev = true
    }
    else {                    // сдвиг влево с циклом
      let elm, buf, this$ = this;
      this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
      this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
      setTimeout(function() {
        this$.crslList.style.cssText = 'transition:none;';
        for(let i=0; i<num; i++) {
          elm = this$.crslList.firstElementChild;
          buf = elm.cloneNode(true);
          this$.crslList.appendChild(buf);
          this$.crslList.removeChild(elm)
        };
      this$.crslList.style.marginLeft = '0px'
      }, this.options.speed)
    }
  };
  
  Ant.initialize = function(that) {
  
  // Constants
  that.elemCount = that.crslElements.length; // Количество элементов
  let elemStyle = window.getComputedStyle(that.crslElemFirst);
  that.elemWidth = that.crslElemFirst.offsetWidth +  // Ширина элемента (без margin)
    parseInt(elemStyle.marginLeft) + parseInt(elemStyle.marginRight);
  
  // Variables
  that.currentElement = 0; that.currentOffset = 0;
  that.touchPrev = true; that.touchNext = true;
  let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
  let bgTime = getTime();
  
  // Functions
  function getTime() {
    return new Date().getTime();
  };
  function setAutoScroll() {
    that.autoScroll = setInterval(function() {
      let fnTime = getTime();
      if(fnTime - bgTime + 10 > that.options.interval) {
        bgTime = fnTime; that.elemNext()
      }
    }, that.options.interval)
  };
  
  // Start initialization
  if(that.elemCount <= that.options.elemVisible) {   // Отключить навигацию
    that.options.auto = false; that.options.touch = false;
   
  };
  
  if(!that.options.loop) {       // если нет цикла - уточнить количество точек
     that.touchPrev = false;    // отключить прокрутку прикосновением вправо
    that.options.auto = false; // отключить автопркрутку
  }
  else if(that.options.auto) {   // инициализация автопрокруки
    setAutoScroll();
    // Остановка прокрутки при наведении мыши на элемент
    that.crslList.addEventListener('mouseenter', function() {
      clearInterval(that.autoScroll)
    }, false);
    that.crslList.addEventListener('mouseleave', setAutoScroll, false)
  };
  
  if(that.options.touch) {   // инициализация прокрутки прикосновением
    that.crslList.addEventListener('touchstart', function(e) {
      xTouch = parseInt(e.touches[0].clientX);
      yTouch = parseInt(e.touches[0].clientY);
      stTime = getTime()
    }, false);
    that.crslList.addEventListener('touchmove', function(e) {
      if(!xTouch || !yTouch) return;
      xDiff = xTouch - parseInt(e.touches[0].clientX);
      yDiff = yTouch - parseInt(e.touches[0].clientY);
      mvTime = getTime();
      if(Math.abs(xDiff) > 15 && Math.abs(xDiff) > Math.abs(yDiff) && mvTime - stTime < 75) {
        stTime = 0;
        if(that.touchNext && xDiff > 0) {
          bgTime = mvTime; that.elemNext()
        }
        else if(that.touchPrev && xDiff < 0) {
          bgTime = mvTime; that.elemPrev()
        }
      }
    }, false)
  };
  
  };  
  new Ant();
   */