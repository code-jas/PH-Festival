

// declaration of DOM

const mainEl = document.querySelector("#fest-tl-lms");


// initialize

// window.addEventListener("DOMContentLoaded", () => { 
//    console.log(festivalContent);
// festivalContent
//    .sort(function(a,b) { 
//       return a.dateFormat.getMonth() - b.dateFormat.getMonth() /*|| a.name.localeCompare (b.title);*/
//    })
//    console.log(dateContent);
//    displayFestivalTimelineItems(festivalContent);

// });


function sortMonth(festival){ 
   festival.sort(function(a,b){
      return new Date(a.dateFormat) - new Date(b.dateFormat)|| a.title.localeCompare (b.title);;
    });
}

// // Function to display the Festival Timeline Items

// function displayFestivalTimelineItems(festivalItems){ 
//    let displayFestival = festivalItems.map((item) =>{
//       return `
//          <li class="fest-tl-list">
//             <h3 class="fest-tl-hd1">${item.title}</h3>
//             <p class="fest-tl-hd2">${item.date}</p>
//             <p>${truncateWords(item.paragraph1)}</p>
//             <a href="#">Read More ></a>
//          </li>
//          <span class="fest-tl-date">January</span>
//          <span class="fest-tl-circle"></span>
//       `;
//    });
//    displayFestival = displayFestival.join('');
//    mainEl.innerHTML = displayFestival;
// }


function truncateWords(shortDesc) {
   const words = shortDesc.split(' ');
   const amount = 35, tail = '...';

   if (amount >= words.length) {
      return shortDesc;
   }

   const truncated = words.slice(0, amount);
   return `${truncated.join(' ')}${tail}`;
}



function getMonthInWord(month){
   const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month];

}
function filterMonthDisplay(){ 
   const monthEl = document.querySelectorAll('.fest-tl-date');
   // console.log(monthEl);

   monthEl.forEach((e)=> { 
      e.innerHTML
   })
}


function goingUpBtn(){ 
   const backToTopButton = document.querySelector("#back-to-top-btn");

   window.addEventListener("scroll", scrollFunction);
   
   function scrollFunction() {
     if (window.pageYOffset > 300) { // Show backToTopButton
       if(!backToTopButton.classList.contains("btnEntrance")) {
         backToTopButton.classList.remove("btnExit");
         backToTopButton.classList.add("btnEntrance");
         backToTopButton.style.display = "block";
       }
     }
     else { // Hide backToTopButton
       if(backToTopButton.classList.contains("btnEntrance")) {
         backToTopButton.classList.remove("btnEntrance");
         backToTopButton.classList.add("btnExit");
         setTimeout(function() {
           backToTopButton.style.display = "none";
         }, 250);
       }
     }
   }
   
   backToTopButton.addEventListener("click", smoothScrollBackToTop);
   
   // function backToTop() {
   //   window.scrollTo(0, 0);
   // }
   
   function smoothScrollBackToTop() {
     const targetPosition = 0;
     const startPosition = window.pageYOffset;
     const distance = targetPosition - startPosition;
     const duration = 750;
     let start = null;
     
     window.requestAnimationFrame(step);
   
     function step(timestamp) {
       if (!start) start = timestamp;
       const progress = timestamp - start;
       window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
       if (progress < duration) window.requestAnimationFrame(step);
     }
   }
   
   function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
   };
}