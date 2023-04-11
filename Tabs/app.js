"use strict";

const navLinks = document.querySelectorAll(".nav-link");
const forms = document.querySelectorAll(".form");
const formNum = Array.from(navLinks);

navLinks.forEach(function (navEl) {
  navEl.addEventListener("click", function (e) {
    e.preventDefault();

    const formPosition = formNum.indexOf(navEl);

    forms.forEach((el) => el.classList.remove("show"));
    forms[formPosition].classList.add("show");
  });
});
