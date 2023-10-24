const navMenuBtn = document.querySelector(".navMenuBtn");
const navList = document.querySelector(".navList");
const body = document.body;
const navLinks = document.querySelectorAll(".navLink");
const windowPathName = window.location.pathname;

navLinks.forEach((navLink) => {
  const navLinkPathName = new URL(navLink.href).pathname;

  if (
    windowPathName === navLinkPathName ||
    (windowPathName === "/index.html" && navLinkPathName === "./pages/")
  ) {
    navLink.classList.add("active");
  }
});

navMenuBtn.addEventListener("click", function () {
  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    body.classList.add("noScroll");
  } else {
    body.classList.remove("noScroll");
  }
});
