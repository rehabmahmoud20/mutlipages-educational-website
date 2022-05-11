"use strict";
//adjust the scroll navbar
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("scrollNav", window.scrollY > 0);
});
const bar = document.querySelector("nav .fa-bars");
const close = document.querySelector("nav .fa-close");
const navMenue = document.querySelector(".nav__menue");

bar.addEventListener("click", () => {
  navMenue.classList.toggle("active");
  bar.classList.toggle("hide");
  close.classList.toggle("active");
  
});
close.addEventListener("click", () => {
  navMenue.classList.toggle("active");
  bar.classList.toggle("hide");
  close.classList.toggle("active");
  
});

//show and hide question and answer
let question = document.querySelectorAll(".question");

question.forEach((quest) => {
  quest.addEventListener("click", () => {
    quest.classList.toggle("toggleText");

    let icon = quest.querySelector(".question span i");

    if (icon.className == "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

//slider
let btn = document.querySelectorAll(".slider-container ul .list");
let slides = document.querySelector(".slides");
btn[0].addEventListener("click", function () {
  slides.style.transform = "translatex(0px)";
});
btn[1].addEventListener("click", function () {
  slides.style.transform = "translate(-450px)";
});
btn[2].addEventListener("click", function () {
  slides.style.transform = "translate(-900px)";
});
btn[3].addEventListener("click", function () {
  slides.style.transform = "translate(-1350px)";
});
btn[4].addEventListener("click", function () {
  slides.style.transform = "translate(-1800px)";
});

// item.forEach(slide=>{

// })
