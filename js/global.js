/****************  hamburger (mobile view) - start     *********************/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

clickCount = 0;
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("navbar-active");
   navMenu.classList.toggle("navbar-active");
   ++clickCount;
   console.log(clickCount);
   if (clickCount % 2 === 0) {
      document.querySelector("body").style.overflow = "auto";
   

   } else {

      document.querySelector("body").style.overflow = "hidden";
   }
})

navLinks.forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("navbar-active");
   navMenu.classList.toggle("navbar-active");
   document.querySelector("body").style.overflow = "auto";
}))

/****************  hamburger (mobile view) - end     *********************/

/****************  smooth-scroll - start     *********************/
// const body = document.body;
// const scrollWrap = document.getElementsByClassName("js-scroll")[0];

// const height = scrollWrap.getBoundingClientRect().height - 1;
// const speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//    offset += (window.pageYOffset - offset) * speed;

//    var scroll = "translateY(-" + offset + "px) translateZ(0)";
//    scrollWrap.style.transform = scroll;
//    callsScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();


// const scroll = new LocomotiveScroll({
//    el: document.querySelector("[data-scroll-container]"),
//    smooth: true
// })

/****************  smooth-scroll - end     *********************/

/****************  pageloader - start     *********************/
/****************  pageloader - end     *********************/

$(window).on('load', function () {
   $(".loading__wrapper").delay(1000).fadeOut(100);
   $('.comp-cont-el').delay(1000).fadeIn(500)

})