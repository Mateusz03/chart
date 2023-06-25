<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$servername = "localhost";
$username = "root";
$password = "";
$db = 'chart';
//i need add .env 

$conn = new mysqli($servername, $username, $password,$db);

$sql = "SELECT * FROM clients";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo '{"canal":"'.$row['client'].'","qty":'.$row['quantity'].'}#';
    
    }
  } else {
    echo "0 results";
  }
  $conn->close();