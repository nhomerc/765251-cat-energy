var showHideButton = document.querySelector(".header__menu-button");
var mainMenu = document.querySelector(".main-nav");
var beforeButton = document.querySelector(".example__button--before");
var afterButton = document.querySelector(".example__button--after");
var beforeImg = document.querySelector(".example__picture--before");
var afterImg = document.querySelector(".example__picture--after");
var modalBtn = document.querySelector(".modal__button");
var modalWindow = document.querySelector(".modal__wrapper");
var orderBtn = document.querySelector(".catalog__order");

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
  afterButton.addEventListener("click", function (next) {
    next.preventDefault();
    afterButton.classList.add("example__button--active");
    beforeButton.classList.remove("example__button--active");
    beforeImg.classList.remove("example__picture--show");
    afterImg.classList.add("example__picture--show");
  })
}

if (document.querySelector(".example__button--before")) {
  beforeButton.addEventListener("click", function (next) {
    next.preventDefault();
    afterButton.classList.remove("example__button--active");
    beforeButton.classList.add("example__button--active");
    afterImg.classList.remove("example__picture--show");
    beforeImg.classList.add("example__picture--show");
  })
}

if (document.querySelector(".modal__button")) {
  modalBtn.addEventListener("click", function (closeModal) {
    closeModal.preventDefault();
    modalWindow.classList.remove("modal__wrapper--show");
  })
}

if (document.querySelector(".catalog__order")) {
  orderBtn.addEventListener("click", function (showModal) {
    showModal.preventDefault();
    modalWindow.classList.add("modal__wrapper--show");
  })
}
