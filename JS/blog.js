const mobileNav = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");
const call = document.querySelector(".call");
const discord = document.querySelector(".discord");

call.addEventListener("click", () => {
  Swal.fire({
    imageUrl: 'https://i.ibb.co/d04JBmC/image.png',
    imageWidth: 75,
    imageHeight: 75,
    html:  `My phone number is <b><a href="tel:+94711436311">071-1436311</a></b>`,
  })
});

discord.addEventListener("click", () => {
  Swal.fire({
    imageUrl: 'https://i.ibb.co/JsdzLhm/image-2021-10-08-173444.png',
    imageWidth: 75,
    imageHeight: 75,
    html:  `My Discord Handle is <b>chamindu_js#6588</b>`,
  })
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loaderr");
  loader.style.transform = "translateY(-100%)";
});

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

window.onscroll = function () {
  if (scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
