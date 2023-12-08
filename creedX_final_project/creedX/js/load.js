let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 9;

loadMoreBtn.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".container-courses .box-container .box"),
  ];
  for (var i = currentItem; i < currentItem + 6; i++) {
    boxes[i].style.display = "inline-block ";
  }
};
