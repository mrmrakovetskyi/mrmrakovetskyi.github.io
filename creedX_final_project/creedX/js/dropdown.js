let click = document.querySelector(".dropdown-btn");
let list = document.querySelector(".list");
click.addEventListener("click", () => {
  list.classList.toggle("newlist");
});
