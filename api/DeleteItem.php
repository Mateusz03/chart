<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$servername = "localhost";
$username = "root";
$password = "";
$db = 'chart';
//i need add .env 

$conn = new mysqli($servername, $username, $password,$db);

$request_body = file_get_contents('php://input');

$data = json_decode($request_body, true);

$delete = "DELETE FROM `clients` WHERE client = '".$data['canal']."'";

$delete_query = mysqli_query($conn,$delete);

echo $delete_query;