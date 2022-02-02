<?php
   $server = "localhost";
   $username = "root";
   $password = "";
   $dbName = "festival_db";

   $conn = mysqli_connect($server, $username, $password, $dbName);


   if( mysqli_connect_errno()) { 
      echo "Failed to connect to MYSQL: " . mysqli_connect_error();
   } 

   if (!mysqli_set_charset($conn, "utf8")){
      mysqli_error($conn);
      exit();
  }
  else{
      mysqli_character_set_name($conn);
  }

?>