const navMenuBtn = document.querySelector(".navMenuBtn");
const navList = document.querySelector(".navList");

navMenuBtn.addEventListener("click", function () {
  navList.classList.toggle("active");
});
