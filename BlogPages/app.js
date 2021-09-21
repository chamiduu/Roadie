const blog = document.querySelector(".blog");
const bar = document.querySelector(".progress");
const toTop = document.querySelector(".toTop");
const mobileNav = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");

const height = blog.offsetHeight;

window.onscroll = function () {
  let fill = (window.pageYOffset / height) * 100;
  bar.style.width = `calc(${fill}% - 10vh)`;
  if (window.scrollY > 750) {
    toTop.style.opacity = "1";
  } else {
    toTop.style.opacity = "0";
  }

  if (scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});
