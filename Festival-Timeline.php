<?php

   include("./php/db_conn.php");

?>


<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Festival Gallery | Festival Ph</title>
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
   <!-- navigation bar css -->
   <link rel="stylesheet" href="css/festival-timeline.css">
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
         <a href="Festival-Gallery.php">
            <div class="icon-navbar-view timeline">

               <div class="tooltip-timeline">Gallery View</div>
               <span><i class="fas fa-images"></i></span>

            </div>
         </a>
         <a href="#">
            <div class="icon-navbar-view timeline active-rn">

               <div class="tooltip-timeline">Timeline View</div>
               <span><i class="fas fa-list-ul"></i></span>

            </div>
         </a>
      </div>


      <!-- start | In Line navigation bar -->
      <header class="sticky">
         <nav class="navbar">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="nav-branding"><img class="img-branding"
                  src="./img/logo/Festival Ph - Logo 96x96.png" alt="Festival Ph Logo" /><img class="img-branding"
                  src="https://fontmeme.com/permalink/220111/85ccb88541790fd7b5db3b2d38a6081d.png" alt="logo"
                  border="0">
            </a>

            <div class="nav-menu">
               <ul class="sub-nav-menu">
                  <li class="nav-item"><a href="index.html" accesskey="1" tabindex="1" class="nav-link">Home</a></li>
                  <li class="nav-item"><a href="festival.html" accesskey="2" tabindex="2" class="nav-link">Festival</a>
                  </li>
                  <li class="nav-item"><a href="aboutus.html" accesskey="3" tabindex="3" class="nav-link">About
                        Us</a>
                  </li>     
               </ul>
            </div>

            <div class="hamburger">
               <span class="burger-bar"></span>
               <span class="burger-bar"></span>
               <span class="burger-bar"></span>
            </div>
         </nav>
      </header>
      <div class="comp-cont-el">
      <!-- end | In Line navigation bar -->
      <div class="js-cont">
         <div class="js-scroll">
            <div class="global-fest bg-color-el">
               <div class=" gall-title">
                  <h1>Festival Timeline</h1>
                  <div class="underline"></div>
               </div>
               <div class="main-tl">
                
                  <div class="fest-tl-cont">
                     <ul id = "fest-tl-lms">
                        <li class="fest-tl-list">
                           <h3 class="fest-tl-hd1">Higantes Festival</h3>
                           <p class="fest-tl-hd2">November 23</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                           totam </p>
                           <a href="#">Read More ></a>
                           <span class="fest-tl-date">January</span>
                           <span class="fest-tl-circle"></span>
                        </li>
                        <li class="fest-tl-list">
                           <h3 class="fest-tl-hd1">Tuna Festival</h3>
                           <p class="fest-tl-hd2">First week of September</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                           totam </p>
                           <a href="#">Read More ></a>
                           <span class="fest-tl-date">February</span>
                           <span class="fest-tl-circle"></span>
                        </li>
                     
                     </ul>
                  </div>
              </div>
            </div>

              
         </div>
      </div>
    
      <!--  FOOTER START -->

      <div class="footer">
         <div class="inner-footer">

            <!--  for quick links  -->
            <div class="footer-items">
               <a href="https://fontmeme.com/script-fonts/" class="footer--logo"><img
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
                  <li><a href="festival.html">Festival</a></li>
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
      // console.log(festivalContent);
      window.addEventListener("DOMContentLoaded", () => {
         sortMonth(festivalContent);
         console.log(festivalContent);
         displayFestivalTimelineItems(festivalContent);
      });
      
   </script>
   <script src="./js/festival-timeline.js"></script>
   <script>
      
      function displayFestivalTimelineItems(festivalItems){ 
         let displayFestival = festivalItems.map((item) =>{
            return `
               <li class="fest-tl-list">
                  <h3 class="fest-tl-hd1">${item.title}</h3>
                  <p class="fest-tl-hd2">${item.date}</p>
                  <p>${truncateWords(item.paragraph1)}</p>
                  <a class="fest-tl-link" href="viewFestivalDetails.php?id=${item.id}">Read More <i class="fas fa-chevron-right"></i></a>
               
                  <span class="fest-tl-date">January</span>
                  <span class="fest-tl-circle"></span>
               </li>
            `;
         });
         displayFestival = displayFestival.join('');
         mainEl.innerHTML = displayFestival;
      }

   </script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


   <script type="text/javascript" src="js/global.js"></script>
  

</body>

</html>