
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
   <!-- view details css -->
   <link rel="stylesheet" href="css/view-festival-details.css">
   <!-- footer css -->
   <link rel="stylesheet" href="css/footer.css">


</head>

<body>


<!-- start | In Line navigation bar -->

   <!-- start | Back to menu -->
   <div class="back-menu">
      <a href="Festival-Gallery.php">
         <button class="back" role="button">
            <i class="fas fa-angle-left"></i>
            <span class="back-hide">back to festivals</span>
           
         </button>
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="article-logo"><img class="img-branding"
                  src="https://fontmeme.com/permalink/220125/375222261753d51cbf70b11aab7efd62.png" alt="logo"
                  border="0">
            </a>
   </div>
   <!-- end | Back to menu -->

 
<?php
   include("./php/viewFestivalDetails_func.php");
?>  

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

      <?php
         echo"
         <script>
            const changeBgHeader = document.querySelector(\".fest-header\");
            changeBgHeader.style.background = \"url($db_img) 50% 50%\";
            changeBgHeader.style.backgroundSize = \"cover\";
            changeBgHeader.style.backgroundClip = \"text\";
         </script>
            ";
      ?>        
      
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <!-- <script type="text/javascript" src="js/global.js"></script> -->
</body>

</html>