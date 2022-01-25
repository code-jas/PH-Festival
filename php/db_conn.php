<?php
   $server = "localhost";
   $username = "root";
   $password = "";
   $dbName = "festival_db";

   $conn = mysqli_connect($server, $username, $password, $dbName);

   if( mysqli_connect_errno()) { 
      echo "Failed to connect to MYSQL: " . mysqli_connect_error();
   } 

?>