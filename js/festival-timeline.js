

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
