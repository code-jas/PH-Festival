/****************  change bg navbar when scroll - start     *********************/
const header = document.querySelector("header");

window.addEventListener("scroll", () =>
   header.classList.toggle("sticky", window.scrollY > 0)
)
/****************  change bg navbar when scroll - start     *********************/

// /****************  button to festival  - start     *********************/

// const galleryBtn = document.querySelector(".fest-btn");

// galleryBtn.addEventListener('click', function (e) {
//    let x = e.clientX - e.target.offsetLeft;
//    let y = e.clientY - e.target.offsetTop;

//    let ripples = document.createElement('span');
//    ripples.style.left = x + 'px';
//    ripples.style.top = y + 'px';
//    this.appendChild(ripples);

//    setTimeout(() => {
//       ripples.remove()
//    }, 1000)
// })
// /****************  button to festival  - start     *********************/
