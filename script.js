const navMenuBtn = document.querySelector(".navMenuBtn");
const navList = document.querySelector(".navList");
const body = document.body;

navMenuBtn.addEventListener("click", function () {
  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    body.classList.add("noScroll");
  } else {
    body.classList.remove("noScroll");
  }
});
