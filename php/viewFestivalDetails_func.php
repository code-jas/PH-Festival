<?php


   $user_id = $_REQUEST["id"];

   $get_record = mysqli_query($conn , "SELECT * FROM festival_details_v2 WHERE id='$user_id'");


   while($row = mysqli_fetch_assoc($get_record)) { 
      $db_id = $row["id"];
      $db_title = $row["title"];
      $db_islandGroup =$row["islandGroup"];
      $db_date = $row["date"];
      $db_location = $row["location"];
      $db_paragraph1 = $row["paragraph1"];
      $db_paragraph2 = $row["paragraph2"];
      $db_paragraph3 = $row["paragraph3"];
      $db_paragraph4 = $row["paragraph4"];
      $db_img = $row["webSrc_img"];
      $db_imgItem1 = $row["webSrc_imgItem1"];
      $db_imgItem2 = $row["webSrc_imgItem2"];
      $db_imgItem3 = $row["webSrc_imgItem3"];
      $db_imgItem4 = $row["webSrc_imgItem4"];
      $db_ytPath = $row["ytPath"];
      $db_ref = $row["ref"];
   }

   echo "<div class=\"fest-container\">
            <h5 class=\"fest-island-group\">$db_islandGroup</h5>
            <h1 class=\"fest-header\">$db_title</h1>
            <h5 class=\"fest-date\"> $db_date</h5>
            <h5 class=\"fest-loc\"><i class=\"fas fa-map-marker-alt\"></i>$db_location</h5>
            <div class=\"fest-parag-cont\">
               <p class=\"fest-parag\">$db_paragraph1</p>
               <br>
               <p class=\"fest-parag\">$db_paragraph2</p>
               <img src=\"$db_img\" alt=\"$db_title\" class=\"image\">
               <p class=\"fest-parag\"> $db_paragraph3</p>
               <br>
               <p class=\"fest-parag\">$db_paragraph4</p>
               <h3>$db_title Activities</h3>


               <div class=\"container\">
                  <div class=\"box\">
                     <img src=\"$db_imgItem1\" />
                  
                  </div>
                  <div class=\"box\">
                     <img src=\"$db_imgItem2\" />
                  
                  </div>
                  <div class=\"box\">
                     <img src=\"$db_imgItem3\" />
                  
                  </div>
                  <div class=\"box\">
                     <img src=\"$db_imgItem4\" />

                  </div>
               </div>

               <div class=\"video-wrapper\">
                  <iframe width=\"560\" height=\"315\" src=\"$db_ytPath\"
                     title=\"YouTube video player\" frameborder=\"0\"
                     allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
                     allowfullscreen></iframe>
               </div>
               <div class=\"content-fest-link-source\">
                  <a href=\"\">reference</a>
                </div>

            </div>



         </div>";


   // echo "

   // "

?>