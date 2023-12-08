// let modal = document.getElementById("myModal");
// let modaReg = document.getElementById("myModalReg");
// let btn = document.getElementById("myBtn");
// let btnReg = document.getElementById("myBtnReg");
// let span = document.getElementsByClassName("close");
// let closeReg = document.getElementById("closeReg");

// btn.onclick = function () {
//   modal.style.display = "block";
// };
// span.onclick = function () {
//   modal.style.display = "none";
// };
// btnReg.onclick = function () {
//   modal_reg.style.display = "block";
// };
// closeReg.onclick = function () {
//   modal_reg.style.display = "none";
// };

window.addEventListener("click", function (event) {
  let modal = document.getElementById("myModal");
  let modaReg = document.getElementById("myModalReg");
  let span = document.getElementsByClassName("close");
  let closeReg = document.getElementById("closeReg");
  if (event.target.id === "myBtnReg") {
    modaReg.classList.toggle("active");
    closeReg.classList.remove("active");
  }
  if (event.target.id === "myBtn") {
    modal.classList.toggle("active");
    span.classList.remove("active");
    modaReg.classList.remove("active");
  }

  if (event.target.id === "singup") {
    modal.classList.remove("active");
    modal.classList.toggle("active");
  }
});
