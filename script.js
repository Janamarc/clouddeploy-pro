// script.js

// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 2000);

});

// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();

// BUTTON CLICK EFFECT

const morphBtn = document.querySelector(".morph-btn");

morphBtn.addEventListener("click", () => {

  morphBtn.innerText = "Animations Loaded 🚀";

  morphBtn.style.background = "#22c55e";

});

// CONTACT BUTTON

const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", () => {

  alert("Frontend Creativity Unlocked ✨");

});
