let accordions = document.querySelectorAll(".learn-accordion");

accordions.forEach(function (accordion) {
  let open = accordion.querySelector(".learn-block-header");
  let plus = accordion.querySelector(".learn-plus");
  let hidden = accordion.querySelector(".learn-hiden-block");

  open.addEventListener("click", function () {
    accordion.classList.toggle("active");
    plus.classList.toggle("active");
  });
});
