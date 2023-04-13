const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  menu.classList.toggle("active");
});

window.onscroll = () => {
  menuIcon.classList.remove("fa-xmark");
  menu.classList.remove("active");
};

const openModalOne = () => {
  document.querySelector(".one").classList.add("show-modal");
};
const closeModalOne = () => {
  document.querySelector(".one").classList.remove("show-modal");
};

const openModalTwo = () => {
  document.querySelector(".two").classList.add("show-modal");
};
const closeModalTwo = () => {
  document.querySelector(".two").classList.remove("show-modal");
};

const openModalThree = () => {
  document.querySelector(".three").classList.add("show-modal");
};
const closeModalThree = () => {
  document.querySelector(".three").classList.remove("show-modal");
};

const openModalFour = () => {
  document.querySelector(".four").classList.add("show-modal");
};
const closeModalFour = () => {
  document.querySelector(".four").classList.remove("show-modal");
};
