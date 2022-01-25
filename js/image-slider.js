console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
   prev: document.querySelector(".btn--left"),
   next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");
const videoEl = document.querySelector(".vid");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));
var vidControl = 1;
function swapCards(direction) {



   const currentCardEl = cardsContainerEl.querySelector(".current--card");
   const previousCardEl = cardsContainerEl.querySelector(".previous--card");
   const nextCardEl = cardsContainerEl.querySelector(".next--card");

   const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
   const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
   const nextBgImageEl = appBgContainerEl.querySelector(".next--image");



   changeInfo(direction);
   swapCardsClass();

   removeCardEvents(currentCardEl);

   function swapCardsClass() {

      currentCardEl.classList.remove("current--card");
      previousCardEl.classList.remove("previous--card");
      nextCardEl.classList.remove("next--card");

      currentBgImageEl.classList.remove("current--image");
      previousBgImageEl.classList.remove("previous--image");
      nextBgImageEl.classList.remove("next--image");

      const curVideoEl = document.querySelector(".cur-video");
      const nextVideoEl = document.querySelector(".next-video");
      const prevVideoEl = document.querySelector(".prev-video");


      currentCardEl.style.zIndex = "20";
      currentBgImageEl.style.zIndex = "-2";

      if (direction === "right") {
         previousCardEl.style.zIndex = "20";
         nextCardEl.style.zIndex = "30";

         nextBgImageEl.style.zIndex = "-1";

         currentCardEl.classList.add("previous--card");
         previousCardEl.classList.add("next--card");
         nextCardEl.classList.add("current--card");

         currentBgImageEl.classList.add("previous--image");
         previousBgImageEl.classList.add("next--image");
         nextBgImageEl.classList.add("current--image");

         playCurrentVid(1);

      } else if (direction === "left") {
         previousCardEl.style.zIndex = "30";
         nextCardEl.style.zIndex = "20";

         previousBgImageEl.style.zIndex = "-1";

         currentCardEl.classList.add("next--card");
         previousCardEl.classList.add("current--card");
         nextCardEl.classList.add("previous--card");

         currentBgImageEl.classList.add("next--image");
         previousBgImageEl.classList.add("current--image");
         nextBgImageEl.classList.add("previous--image");

         playCurrentVid(-1);


      }
      // observer.observe(document.querySelector('.cur-video'));
      // observer.observe(document.querySelector('.next-video'));
      // observer.observe(document.querySelector('.prev-video'));
      function playCurrentVid(val) {
         vidControl += val;

         if (vidControl === 4) vidControl = 1;
         if (vidControl === 0) vidControl = 3;
         console.log(vidControl)
         if (vidControl == 2) {
            //play video if the video is in the middle
            curVideoEl.pause();
            prevVideoEl.pause();
            nextVideoEl.play();

            //auto pause and play video if scroll
            curVideoEl.removeAttribute('id');
            prevVideoEl.removeAttribute('id');
            nextVideoEl.setAttribute('id', 'vid-scroll-control');
         } else if (vidControl == 3) {
            //play video if the video is in the middle
            curVideoEl.pause();
            prevVideoEl.play();
            nextVideoEl.pause();

            //auto pause and play video if scroll
            curVideoEl.removeAttribute('id');
            prevVideoEl.setAttribute('id', 'vid-scroll-control');
            nextVideoEl.removeAttribute('id');
         } else if (vidControl == 1) {
            //play video if the video is in the middle
            curVideoEl.play();
            prevVideoEl.pause();
            nextVideoEl.pause();

            //auto pause and play video if scroll
            curVideoEl.setAttribute('id', 'vid-scroll-control');
            prevVideoEl.removeAttribute('id');
            nextVideoEl.removeAttribute('id');
         }     
        
         observer.observe(document.getElementById('vid-scroll-control'));
   

      }
   }
}

function changeInfo(direction) {
   let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
   let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
   let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

   // gsap.timeline()
   //    .to([buttons.prev, buttons.next], {
   //       duration: 0.2,
   //       opacity: 0.5,
   //       pointerEvents: "none",
   //    })
   //    .to(
   //       currentInfoEl.querySelectorAll(".text"),
   //       {
   //          duration: 0.4,
   //          stagger: 0.1,
   //          translateY: "-120px",
   //          opacity: 0,
   //       },
   //       "-="
   //    )
   //    .call(() => {
   //       swapInfosClass(direction);
   //    })
   //    .call(() => initCardEvents())
   //    .fromTo(
   //       direction === "right"
   //          ? nextInfoEl.querySelectorAll(".text")
   //          : previousInfoEl.querySelectorAll(".text"),
   //       {
   //          opacity: 0,
   //          translateY: "40px",
   //       },
   //       {
   //          duration: 0.4,
   //          stagger: 0.1,
   //          translateY: "0px",
   //          opacity: 1,
   //       }
   //    )
   //    .to([buttons.prev, buttons.next], {
   //       duration: 0.2,
   //       opacity: 1,
   //       pointerEvents: "all",
   //    });

   function swapInfosClass() {
      currentInfoEl.classList.remove("current--info");
      previousInfoEl.classList.remove("previous--info");
      nextInfoEl.classList.remove("next--info");

      if (direction === "right") {
         currentInfoEl.classList.add("previous--info");
         nextInfoEl.classList.add("current--info");
         previousInfoEl.classList.add("next--info");
      } else if (direction === "left") {
         currentInfoEl.classList.add("next--info");
         nextInfoEl.classList.add("previous--info");
         previousInfoEl.classList.add("current--info");
      }
   }
}

function updateCard(e) {
   const card = e.currentTarget;
   const box = card.getBoundingClientRect();
   const centerPosition = {
      x: box.left + box.width / 2,
      y: box.top + box.height / 2,
   };
   let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
   gsap.set(card, {
      "--current-card-rotation-offset": `${angle}deg`,
   });
   const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
   gsap.set(currentInfoEl, {
      rotateY: `${angle}deg`,
   });
}

function resetCardTransforms(e) {
   const card = e.currentTarget;
   const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
   gsap.set(card, {
      "--current-card-rotation-offset": 0,
   });
   gsap.set(currentInfoEl, {
      rotateY: 0,
   });
}

function initCardEvents() {
   const currentCardEl = cardsContainerEl.querySelector(".current--card");
   // currentCardEl.addEventListener("pointermove", updateCard);
   currentCardEl.addEventListener("pointerout", (e) => {
      resetCardTransforms(e);
   });
}

initCardEvents();

function removeCardEvents(card) {
   // card.removeEventListener("pointermove", updateCard);
}

function init() {

   let tl = gsap.timeline();

   tl.to(cardsContainerEl.children, {
      delay: 0.15,
      duration: 0.5,
      stagger: {
         ease: "power4.inOut",
         from: "right",
         amount: 0.1,
      },
      "--card-translateY-offset": "0%",
   })
      .to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
         delay: 0.5,
         duration: 0.4,
         stagger: 0.1,
         opacity: 1,
         translateY: 0,
      })
      .to(
         [buttons.prev, buttons.next],
         {
            duration: 0.4,
            opacity: 1,
            pointerEvents: "all",
         },
         "-=0.4"
      );
}





const waitForImages = () => {
   const images = [...document.querySelectorAll("img")];
   const totalImages = images.length;
   let loadedImages = 0;
   const loaderEl = document.querySelector(".loader span");

   gsap.set(cardsContainerEl.children, {
      "--card-translateY-offset": "100vh",
   });
   gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
      translateY: "40px",
      opacity: 0,
   });
   gsap.set([buttons.prev, buttons.next], {
      pointerEvents: "none",
      opacity: "0",
   });

   images.forEach((image) => {
      imagesLoaded(image, (instance) => {
         if (instance.isComplete) {
            loadedImages++;
            let loadProgress = loadedImages / totalImages;

            gsap.to(loaderEl, {
               duration: 1,
               scaleX: loadProgress,
               backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
            });

            if (totalImages == loadedImages) {
               gsap.timeline()
                  .to(".loading__wrapper", {
                     duration: 0.8,
                     opacity: 0,
                     pointerEvents: "none",
                  })
                  .call(() => init());
            }
         }
      });
   });
};

waitForImages();



/********************** play and pause video when scrolling - start **************** */



let options = {
   root: null,
   rootMargin: '0px',
   threshold: 1.0
}

let callback = (entries, observer) => {

   entries.forEach(entry => {
      if (entry.target.id == 'vid-scroll-control') {
         if (entry.isIntersecting) {
            entry.target.play();
         } else {
            entry.target.pause();
         }
      }
   })
}

let observer = new IntersectionObserver(callback, options);

observer.observe(document.getElementById('vid-scroll-control'));


/********************** play and pause video when scrolling - start **************** */

