var showHideButton = document.querySelector(".header__menu-button");
var mainMenu = document.querySelector(".main-nav");
var beforeButton = document.querySelector(".example__button--before");
var afterButton = document.querySelector(".example__button--after");
var beforeImg = document.querySelector(".example__picture--before");
var afterImg = document.querySelector(".example__picture--after");
var modalBtn = document.querySelector(".modal__button");
var modalWindow = document.querySelector(".modal__wrapper");
var orderBtn = document.querySelectorAll(".button--order");
var allProductsBtn = document.querySelector(".button--all");

mainMenu.classList.toggle("main-nav--show");
showHideButton.classList.toggle("header__menu-button--open");
showHideButton.classList.toggle("header__menu-button--hidden");
if (document.querySelector(".example__picture--before")) {
  beforeImg.classList.toggle("example__picture--show");
}


showHideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-nav--show");
  showHideButton.classList.toggle("header__menu-button--open");
})

if (document.querySelector(".example__button--after")) {
  afterButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    afterButton.classList.add("example__button--active");
    beforeButton.classList.remove("example__button--active");
    beforeImg.classList.remove("example__picture--show");
    afterImg.classList.add("example__picture--show");
  })
}

if (document.querySelector(".example__button--before")) {
  beforeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    afterButton.classList.remove("example__button--active");
    beforeButton.classList.add("example__button--active");
    afterImg.classList.remove("example__picture--show");
    beforeImg.classList.add("example__picture--show");
  })
}

if (document.querySelector(".modal__button")) {
  modalBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove("modal__wrapper--show");
  })
}

for (var i = 0; i < orderBtn.length; i++) {
  orderBtn[i].onclick = function(evt) {
    evt.preventDefault();
    modalWindow.classList.add("modal__wrapper--show");
  }
}

if (document.querySelector(".button--all")) {
  allProductsBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
  })
}
