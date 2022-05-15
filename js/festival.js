
//declaration of DOM

const mainEl = document.querySelector(".fest-gallery-main");
const btnEl = document.querySelector(".gall-btn-cont");

// initialize


function sortByName(festival) {

   festival.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0));
}

// Function to display Category Buttons
function displayIslandGroupButtons(menuBtns) {
   const categories = menuBtns.reduce((values, item) => {
      if (!values.includes(item.islandGroup)) {
         values.push(item.islandGroup);
      }
      return values;
   }, ['all']);

   const categoryBtns = categories
      .map((category) => {
         return `
            <button class="filter-btn" type="button" data-id="${category}">${category}</button>
            `
      })
      .join("");
   btnEl.innerHTML = categoryBtns + ` 
    <div class="search-festival">
         <i class="fas fa-search icon-font-awesome"></i>
         <div class="input-search">
            <input type="text" placeholder="Search for a Festival..." id="search-inp-fest">
         </div>
         <span class="clear" onclick="closeSearchInput()"></span>
    </div>
   `;



   // Filter Button Click Event Listener
   const firstChild = document.querySelector(".gall-btn-cont");

   firstChild.firstElementChild.classList.add('active');

   const filterBtns = document.querySelectorAll(".filter-btn");
   // console.log(filterBtns);
   filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         btnEl.querySelector(".active").classList.remove("active");
         e.target.classList.add("active");
         const category = e.currentTarget.dataset.id;
         // console.log(category);
         const landGrpCategory = festivalContent.filter((landItem) => {
            if (landItem.islandGroup === category) {
               return landItem;

            }

         });

         if (category === 'all') {
            displayFestivalItems(festivalContent);

         }
         else {
            displayFestivalItems(landGrpCategory);
         }
      });
   });
}




function truncateWords(shortDesc) {
   const words = shortDesc.split(' ');
   const amount = 15, tail = '...';

   if (amount >= words.length) {
      return shortDesc;
   }

   const truncated = words.slice(0, amount);
   return `${truncated.join(' ')}${tail}`;
}


function animateImage(images) {
   // console.log(images);
}



function searchButton() {
   // declaration of DOM
   const searchIcon = document.querySelector('.icon-font-awesome');
   const searchFest = document.querySelector('.search-festival');
   const btns = document.querySelectorAll(".filter-btn");
   const searchBar = document.querySelector('#search-inp-fest');
   const searchEmptyEl = document.querySelector('#search-result-empty-state');
   const displayInputSearchEl = document.querySelector('#search-empty-state-keyword');

   var clickCount = 0;
   //show and hide the search button
   searchIcon.onclick = function () {
      searchFest.classList.toggle('search-active');
      btns.forEach((btn) => btn.classList.toggle('search-hide'))
      ++clickCount;
      
      if (clickCount % 2 == 0) {
         searchEmptyEl.style.display = 'none';
         document.getElementById('search-inp-fest').value = '';
         const acts = document.querySelector('.active');

         const category = acts.innerText.toLowerCase();

         const landGrpCategory = festivalContent.filter((landItem) => {
            if (landItem.islandGroup === category) {
               return landItem;

            }

         });
         if (category === 'all') {
            displayFestivalItems(festivalContent);

         }
         else {
            displayFestivalItems(landGrpCategory);
         }

      } else {

      }
   }

   search button
   //functions for search button
   searchBar.addEventListener('keyup', (e) => {

      const searchString = e.target.value;
      // console.log(searchString);

      displayInputSearchEl.innerHTML = searchString;
      const filteredSearchFestival = festivalContent.filter((festival) => {
         return (
            festival.title.toLowerCase().includes(searchString.toLowerCase())
         );
      });
      festivalFoundCount = filteredSearchFestival.length;
      console.log("search found = " + festivalFoundCount);
      if (festivalFoundCount === 0) {
         searchEmptyEl.style.display = 'block';
      } else {
         searchEmptyEl.style.display = 'none';
      }

      displayFestivalItems(filteredSearchFestival);
   });


}



const closeSearchInput = () => {
   const searchEmptyEl = document.querySelector('#search-result-empty-state');
   document.getElementById('search-inp-fest').value = '';
   searchEmptyEl.style.display = 'none';
   displayFestivalItems(festivalContent);
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







