const prevButtonShoe = document.getElementById('prevButtonShoe');
const nextButtonShoe = document.getElementById('nextButtonShoe');
const prevButtonSandal = document.getElementById('prevButtonSandal');
const nextButtonSandal = document.getElementById('nextButtonSandal');
const prevButtonShirt = document.getElementById('prevButtonShirt');
const nextButtonShirt = document.getElementById('nextButtonShirt');
const prevButtonHat = document.getElementById('prevButtonHat');
const nextButtonHat = document.getElementById('nextButtonHat');
const productContainerShoe = document.querySelector('.product-container-shoe');
const productListShoe = document.querySelector('.product-list-shoe');
const productContainerSandal = document.querySelector('.product-container-sandal');
const productListSandal = document.querySelector('.product-list-sandal');
const productContainerShirt = document.querySelector('.product-container-shirt');
const productListShirt = document.querySelector('.product-list-shirt');
const productContainerHat = document.querySelector('.product-container-hat');
const productListHat = document.querySelector('.product-list-hat');
const cardWidth = 214.2; // Width of each product card
let currentPositionShoe = 0;
let currentPositionSandal = 0;
let currentPositionShirt = 0;
let currentPositionHat = 0;
let currentSlideShoe = 0;
let currentSlideSandal = 0;
let currentSlideShirt = 0;
let currentSlideHat = 0;

let cardsPerPage = calculateCardsPerPage(); // Initial value based on current screen size

window.addEventListener('resize', () => {
  cardsPerPage = calculateCardsPerPage(); // Update value when screen size changes
});

function calculateCardsPerPage() {
    const screenWidth = window.innerWidth;
    let cardsPerPage;
  
    if (screenWidth <= 520) {
      cardsPerPage = 1;
    } else if  (screenWidth <= 767){
      cardsPerPage = 2;
    } else if (screenWidth <= 1023) {
      cardsPerPage = 3;
    } else if (screenWidth <= 1200){
      cardsPerPage = 4;
    } else {
        cardsPerPage = 5;
    }
  
    return cardsPerPage;
}
  


prevButtonShoe.addEventListener('click', () => {
    currentSlideShoe--;
    currentPositionShoe = currentSlideShoe * (cardWidth * cardsPerPage * -1);
    productListShoe.style.transform = `translateX(${currentPositionShoe}px)`;
    checkButtonVisibility();
});

nextButtonShoe.addEventListener('click', () => {
    currentSlideShoe++;
    currentPositionShoe = currentSlideShoe * (cardWidth * cardsPerPage * -1);
    productListShoe.style.transform = `translateX(${currentPositionShoe}px)`;
    checkButtonVisibility();
});

prevButtonSandal.addEventListener('click', () => {
    currentSlideSandal--;
    currentPositionSandal = currentSlideSandal * (cardWidth * cardsPerPage * -1);
    productListSandal.style.transform = `translateX(${currentPositionSandal}px)`;
    checkButtonVisibility();
});

nextButtonSandal.addEventListener('click', () => {
    currentSlideSandal++;
    currentPositionSandal = currentSlideSandal * (cardWidth * cardsPerPage * -1);
    productListSandal.style.transform = `translateX(${currentPositionSandal}px)`;
    checkButtonVisibility();
});

prevButtonShirt.addEventListener('click', () => {
    currentSlideShirt--;
    currentPositionShirt = currentSlideShirt * (cardWidth * cardsPerPage * -1);
    productListShirt.style.transform = `translateX(${currentPositionShirt}px)`;
    checkButtonVisibility();
});

nextButtonShirt.addEventListener('click', () => {
    currentSlideShirt++;
    currentPositionShirt = currentSlideShirt * (cardWidth * cardsPerPage * -1);
    productListShirt.style.transform = `translateX(${currentPositionShirt}px)`;
    checkButtonVisibility();
});

prevButtonHat.addEventListener('click', () => {
    currentSlideHat--;
    currentPositionHat = currentSlideHat * (cardWidth * cardsPerPage * -1);
    productListHat.style.transform = `translateX(${currentPositionHat}px)`;
    checkButtonVisibility();
});

nextButtonHat.addEventListener('click', () => {
    currentSlideHat++;
    currentPositionHat = currentSlideHat * (cardWidth * cardsPerPage * -1);
    productListHat.style.transform = `translateX(${currentPositionHat}px)`;
    checkButtonVisibility();
});

function checkButtonVisibility() {
    const totalSlidesShoe = Math.ceil(document.querySelectorAll('.card-shoe').length / cardsPerPage);
    const totalSlidesSandal = Math.ceil(document.querySelectorAll('.card-sandal').length / cardsPerPage);
    const totalSlidesShirt = Math.ceil(document.querySelectorAll('.card-shirt').length / cardsPerPage);
    const totalSlidesHat = Math.ceil(document.querySelectorAll('.card-hat').length / cardsPerPage);
    prevButtonShoe.disabled = currentSlideShoe <= 0;
    nextButtonShoe.disabled = currentSlideShoe >= totalSlidesShoe - 1;
    prevButtonSandal.disabled = currentSlideSandal <= 0;
    nextButtonSandal.disabled = currentSlideSandal >= totalSlidesSandal - 1;
    prevButtonShirt.disabled = currentSlideShirt <= 0;
    nextButtonShirt.disabled = currentSlideShirt >= totalSlidesShirt - 1;
    prevButtonHat.disabled = currentSlideHat <= 0;
    nextButtonHat.disabled = currentSlideHat >= totalSlidesHat - 1;
}

document.addEventListener('DOMContentLoaded', () => {
    checkButtonVisibility();
});







// Variables for touch tracking
let startX = 0;
let startY = 0;
let distX = 0;
let distY = 0;
let startTime = 0;

// Touch start event handler
function handleTouchStart(e) {
  let touch = e.changedTouches[0];
  startX = touch.pageX;
  startY = touch.pageY;
  startTime = new Date().getTime();
}

// Touch move event handler
function handleTouchMove(e) {
  if (!startX || !startY) return;

  let touch = e.changedTouches[0];
  let curX = touch.pageX;
  let curY = touch.pageY;

  distX = curX - startX;
  distY = curY - startY;
}

// Touch end event handler
function handleTouchEnd(e) {
  if (!startX || !startY) return;

  let elapsedTime = new Date().getTime() - startTime;
  let absDistX = Math.abs(distX);
  let absDistY = Math.abs(distY);

  if (elapsedTime <= allowedTime && absDistX >= threshold && absDistY <= restraint) {
    if (distX > 0) {
      // Swiped right
      currentSlide--;
    } else {
      // Swiped left
      currentSlide++;
    }

    updatePosition();
    checkButtonVisibility();
  }

  startX = 0;
  startY = 0;
  distX = 0;
  distY = 0;
}

// Add touch event listeners
productListShoe.addEventListener('touchstart', handleTouchStart, false);
productListShoe.addEventListener('touchmove', handleTouchMove, false);
productListShoe.addEventListener('touchend', handleTouchEnd, false);

productListSandal.addEventListener('touchstart', handleTouchStart, false);
productListSandal.addEventListener('touchmove', handleTouchMove, false);
productListSandal.addEventListener('touchend', handleTouchEnd, false);

productListShirt.addEventListener('touchstart', handleTouchStart, false);
productListShirt.addEventListener('touchmove', handleTouchMove, false);
productListShirt.addEventListener('touchend', handleTouchEnd, false);

productListHat.addEventListener('touchstart', handleTouchStart, false);
productListHat.addEventListener('touchmove', handleTouchMove, false);
productListHat.addEventListener('touchend', handleTouchEnd, false);
