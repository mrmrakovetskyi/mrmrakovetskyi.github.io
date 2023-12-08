let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let homeBtn = document.getElementById("home-btn");
let aboutBtn = document.getElementById("about-me-btn");
let skillsBtn = document.getElementById("skills-btn");
let portfolioBtn = document.getElementById("portfolio-btn");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

homeBtn.onclick = function () {
  menu.style.display = "none";
  menuBtn.classList.toggle("close");
};
aboutBtn.onclick = function () {
  menu.style.display = "none";
  menuBtn.classList.toggle("close");
};
skillsBtn.onclick = function () {
  menu.style.display = "none";
  menuBtn.classList.toggle("close");
};
portfolioBtn.onclick = function () {
  menu.style.display = "none";
  menuBtn.classList.toggle("close");
};
