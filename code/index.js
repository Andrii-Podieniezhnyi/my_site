document.addEventListener("DOMContentLoaded", function () {
  //window.scrollTo(0, 0);

  scrollToElement('header');
})

class parallaxTiltEffect {

    constructor({element, tiltEffect}) {
  
      this.element = element;
      this.container = this.element.querySelector(".container");
      this.size = [300, 360];
      [this.w, this.h] = this.size;
  
      this.tiltEffect = tiltEffect;
  
      this.mouseOnComponent = false;
  
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.defaultStates = this.defaultStates.bind(this);
      this.setProperty = this.setProperty.bind(this);
      this.init = this.init.bind(this);
      this.init();
    }
  
    handleMouseMove(event) {
      const {offsetX, offsetY} = event;
  
      let X;
      let Y;
  
      if (this.tiltEffect === "reverse") {
        X = ((offsetX - (this.w/2)) / 3) / 3;
        Y = (-(offsetY - (this.h/2)) / 3) / 3;
      }
  
      else if (this.tiltEffect === "normal") {
        X = (-(offsetX - (this.w/2)) / 3) / 3;
        Y = ((offsetY - (this.h/2)) / 3) / 3;
      }
  
      this.setProperty('--rY', X.toFixed(2));
      this.setProperty('--rX', Y.toFixed(2));
  
      this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
      this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
    }
  
    handleMouseEnter() {
      this.mouseOnComponent = true;
      this.container.classList.add("container--active");
    }
  
    handleMouseLeave() {
      this.mouseOnComponent = false;
      this.defaultStates();
    }
  
    defaultStates() {
      this.container.classList.remove("container--active");
      this.setProperty('--rY', 0);
      this.setProperty('--rX', 0);
      this.setProperty('--bY', '80%');
      this.setProperty('--bX', '50%');
    }
  
    setProperty(p, v) {
      return this.container.style.setProperty(p, v);
    }
  
    init() {
      this.element.addEventListener('mousemove', this.handleMouseMove);
      this.element.addEventListener('mouseenter', this.handleMouseEnter);
      this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }
  
  }
  
  const $ = e => document.querySelector(e);
  
  const wrap1 = new parallaxTiltEffect({
    element: $('.wrap--1'),
    tiltEffect: 'reverse'
  });
  
  const wrap2 = new parallaxTiltEffect({
    element: $('.wrap--2'),
    tiltEffect: 'normal'
  });
  
  const wrap3 = new parallaxTiltEffect({
    element: $('.wrap--3'),
    tiltEffect: 'reverse'
  });



  //  Slider for projects  //

function slider() {
    const options = document.querySelectorAll(".option");

    options.forEach(option => {
        option.addEventListener("click", function() {
            // Видаляємо клас "active" у всіх варіантів
            options.forEach(opt => opt.classList.remove("active"));
            
            // Додаємо клас "active" до натиснутого варіанту
            this.classList.add("active");
        });
    });
};

slider();


//  About me  //

const left_anim_block = document.querySelector(".left_block");

VANTA.NET({
  el: left_anim_block,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: "#0bd9c5",
  backgroundColor: "#1d1d1d",
  points: 9.00,
  maxDistance: 25.00,
  spacing: 17.00
})

// Функція для отримання випадкового числа у заданому діапазоні
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Фейковий лоадер
let progress = 0;

const fakeLoaderInterval = window.setInterval(function() {
  const lp = document.querySelector('.loading-progress');
  progress = progress + getRandomArbitrary(10, 25);
  lp.style.transform = `translateX(${progress}%)`;
  const headerContainer = document.querySelector(".header__container");

  if (progress >= 75) {
    window.clearInterval(fakeLoaderInterval);
    lp.style.transform = 'translateX(100%)';
    setTimeout(function() {
      const loading = document.querySelector('.loading');
      loading.style.transform = 'translateY(calc(100% + 10px)';
    }, 400);

    headerContainer.style.backgroundImage = 'url("./img/JavaScript-code__for_background.webp")';
  }
  
}, getRandomArbitrary(100, 500))


// Функція плавного переходу до блоку 

function scrollToElement(elementId) {
  document.getElementById(elementId).scrollIntoView({behavior: "smooth"});
}