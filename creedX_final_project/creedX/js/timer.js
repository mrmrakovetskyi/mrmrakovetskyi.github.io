const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

function updateCounter() {
  const date = new Date("november 30 2023 00:00:00");

  const currentTime = new Date();

  const diff = date - currentTime;

  // перевод

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minLeft = Math.floor(diff / 1000 / 60) % 60;
  const secLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  min.innerText = minLeft < 10 ? "0" + minLeft : minLeft;
  sec.innerText = secLeft < 10 ? "0" + secLeft : secLeft;
}
updateCounter();
setInterval(updateCounter, 1000);
