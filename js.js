const buttonOpen = document.querySelector(".buy-now");
const buttonClose = document.querySelector(".close-overlay");
const form = document.querySelector(".booking-tickets");
const overlay = document.querySelector(".overlay-container");

buttonOpen.addEventListener("click", () => {
  overlay.classList.add("active-overlay-container");
  form.classList.add("active-booking-tickets");
});
buttonClose.addEventListener("click", () => {
  overlay.classList.remove("active-overlay-container");
  form.classList.remove("active-booking-tickets");
});
// overlay.addEventListener("click", () => {
//   overlay.classList.remove("active-overlay-container");
//   form.classList.remove("active-booking-tickets");
// });
