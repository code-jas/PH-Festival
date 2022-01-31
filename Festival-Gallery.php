
<?php

   include("./php/db_conn.php");

?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Festival Gallery | Ph Festival</title>
   <link rel="icon" href="img/logo/Festival Ph - Logo 46x46.png">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css">
   <!-- global css -->
   <link rel="stylesheet" href="css/global.css">
   <!-- global css -->
   <link rel="stylesheet" href="css/loader.css">
   <!-- navigation bar css -->
   <link rel="stylesheet" href="css/navbar.css">
   <!-- navigation bar css -->
   <link rel="stylesheet" href="css/festival.css">
   <!-- backtotop bar css -->
   <link rel="stylesheet" href="css/backtotop.css">
   <!-- footer css -->
   <link rel="stylesheet" href="css/footer.css">
   <!-- global js -->

</head>

<body>
   <div class="loading__wrapper">
      <div class="box-wrap">
         <div class="box one"></div>
         <div class="box two"></div>
         <div class="box three"></div>
         <div class="box four"></div>
         <div class="box five"></div>
         <div class="box six"></div>
      </div>
   </div>
   <!-- <div class="page-loader-animation">
      <div></div>
   </div> -->

      <div class="view-btns">
         <a href="#">
            <div class="icon-navbar-view timeline active-rn">

               <div class="tooltip-timeline">Gallery View</div>
               <span><i class="fas fa-images"></i></span>

            </div>
         </a>
         <a href="Festival-Timeline.php">
            <div class="icon-navbar-view timeline">

               <div class="tooltip-timeline">Timeline View</div>
               <span><i class="fas fa-list-ul"></i></span>

            </div>
         </a>
      </div>


      <!-- start | In Line navigation bar -->
      <header class="sticky">
         <nav class="navbar">
            <a href="index.html" class="nav-branding"><img class="img-branding"
                  src="./img/logo/Festival Ph - Logo 96x96.png" alt="Festival Ph Logo" /><img class="img-branding"
                  src="https://fontmeme.com/permalink/220111/85ccb88541790fd7b5db3b2d38a6081d.png" alt="logo"
                  border="0">
            </a>
 
            <div class="nav-menu">
               <ul class="sub-nav-menu">
                  <li class="nav-item"><a href="index.html" accesskey="1" tabindex="1" class="nav-link">Home</a></li>
                  <li class="nav-item"><a href="Festival-Gallery.php" accesskey="2" tabindex="2" class="nav-link">Festival</a>
                  </li>
                  <li class="nav-item"><a href="aboutus.html" accesskey="3" tabindex="3" class="nav-link">About
                        Us</a></li>

               </ul>
            </div>

            <div class="hamburger">
               <span class="burger-bar"></span>
               <span class="burger-bar"></span>
               <span class="burger-bar"></span>
            </div>
         </nav>
      </header>

      <button id="back-to-top-btn"><i class="fas fa-angle-double-up"></i></button>
      
      <div class="comp-cont-el">
      <!-- end | In Line navigation bar -->
      <div class="js-cont">
         <div class="js-scroll">
            <div class="global-fest">
               <div class=" gall-title">
                  <h1>Festival Gallery</h1>
                  <div class="underline"></div>
               </div>

               <div class="gall-btn-cont">

               </div>

               <div id="search-result-empty-state" class="search-empty-state">

                  <img class="search-empty-icon" alt="Search no result illustration" src="./img/search-empty-icon.svg">

                  <p class="l-font-size">Sorry we couldn't find any matches for <span class="bold"
                        id="search-empty-state-keyword">not found</span></p>

                  <p class="m-font-size grey">Please try searching with another term</p>

               </div>
               <main class="fest-gallery-main">

               </main>
            </div>
         </div>
      </div>
      <!--  FOOTER START -->

      <div class="footer">
         <div class="inner-footer">

            <!--  for quick links  -->
            <div class="footer-items">
               <a href="index.html" class="footer--logo"><img
                     src="./img/logo/Festival Ph - Logo 96x96.png" alt="Festival Ph Logo" />
               </a>
               <img class="footer-img-branding"
                  src="https://fontmeme.com/permalink/220111/85ccb88541790fd7b5db3b2d38a6081d.png" alt="logo"
                  border="0">
               <p>Make it a memorable Festival Experience in the Philippines </p>
               <!--for the underline -->
               <ul class="footer-link">
                  <li><a href="#home">Home</a></li>
                  <span class="footer-bar"></span>
                  <li><a href="Festival-Gallery.php">Festival</a></li>
                  <span class="footer-bar"></span>
                  <li><a href="aboutus.html">About Us</a></li>
               </ul>
            </div>


            <!--   for social links -->
            <div class="social-media">
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-facebook"></i></a>
               <a href="#"><i class="fab fa-google-plus-square"></i></a>
            </div>
         </div>
      </div>

      <!--   Footer Bottom start  -->
      <div class="footer-bottom">
         Copyright &copy; FestivalPh 2021.
      </div>
      <!--   Footer Bottom end -->
      <!--   FOOTER END -->
   </div>

   <?php
   
   include("./php/fetch_festival_details.php");
   
   ?>
   <script>
      //  console.log(festivalContent);
      window.addEventListener("DOMContentLoaded", () => {
         sortByName(festivalContent);
         displayIslandGroupButtons(festivalContent);
         displayFestivalItems(festivalContent);


         searchButton();
         goingUpBtn();
      });

   </script>
   
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   
 
   <script src="./js/festival.js"></script>
   <script>
      
      // // Function to display the gallery items

      function displayFestivalItems(festivalItems) {
         let displayFestival = festivalItems.map((item) => {
            return `
            <a href="viewFestivalDetails.php?id=${item.id}">
               <div class="festival-card">
                  <div class="img-box">
                     <img src="${item.img}" alt="${item.title}">
                  </div>
                  <div class="fest-info">
                     <h3>${item.title}</h3>
                     <div class="short-desc">
                        <p>
                        ${truncateWords(item.paragraph1)}
                        </p>
                     </div>
                  </div>
               </div>
            </a>
            `;
         });
         displayFestival = displayFestival.join('');
         mainEl.innerHTML = displayFestival;
      }
   </script>

   <script type="text/javascript" src="js/global.js"></script>
   <script>
      hamburger.addEventListener("click", () => {
       if (clickCount % 2 === 0) {
         document.querySelector(".view-btns").style.display = "flex";
       }else{ 
         document.querySelector(".view-btns").style.display = "none";
       }
      });
   </script>
</body>

</html>