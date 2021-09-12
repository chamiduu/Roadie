const blog = document.querySelector('.blog');
const bar = document.querySelector('.progress');
const toTop = document.querySelector('.toTop');

const height = blog.offsetHeight;

window.onscroll = function () {
    let fill = (window.pageYOffset / height) * 100;
    bar.style.width = `calc(${fill}% - 10vh)`;
    if (window.scrollY > 750) {
      toTop.style.opacity = "1";
    } else {
      toTop.style.opacity = "0";
    }
}
