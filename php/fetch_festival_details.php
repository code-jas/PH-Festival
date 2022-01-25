<?php


   $view_query = mysqli_query($conn,"SELECT * FROM festival_details");
         echo '
            <script>
               const festivalContent = [
         ';

         while($row = mysqli_fetch_assoc($view_query)) { 
            $db_id = $row["id"];
            $db_title = $row["title"];
            $db_islandGroup =$row["islandGroup"];
            $db_date = $row["date"];
            $db_location = $row["location"];
            $db_paragraph1 = $row["paragraph1"];
            $db_paragraph2 = $row["paragraph2"];
            $db_paragraph3 = $row["paragraph3"];
            $db_paragraph4 = $row["paragraph4"];
            $db_img = $row["img"];
            $db_imgItem1 = $row["imgItem1"];
            $db_imgItem2 = $row["imgItem2"];
            $db_imgItem3 = $row["imgItem3"];
            $db_imgItem4 = $row["imgItem4"];
            $db_ytPath = $row["ytPath"];
            $db_ref = $row["ref"];

            echo "
            {
               id: $db_id,
               title: \"$db_title\",
               islandGroup:  \"$db_islandGroup\",
               date:  \"$db_date\",
               location: \"$db_location\",
               paragraph1: \"$db_paragraph1\",
               paragraph2:  \"$db_paragraph2\",
               img: \"$db_img\",
               paragraph3: \"$db_paragraph3\",
               paragraph4: \"$db_paragraph4\",
               imgItem1: \"$db_imgItem1\",
               imgItem2:  \"$db_imgItem2\",
               imgItem3:  \"$db_imgItem3\",
               imgItem4: \"$db_imgItem4\",
               ytPath:  \"$db_ytPath\",
               reference: \"$db_ref\"
            },
            ";

         }

         echo'
               ]

            
            </script>
         
         ';
      
?>