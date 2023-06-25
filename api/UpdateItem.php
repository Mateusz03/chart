<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$servername = "localhost";
$username = "root";
$password = "";
$db = 'chart';
//i need add that to .env

$conn = new mysqli($servername, $username, $password,$db);

$request_body = file_get_contents('php://input');

$data = json_decode($request_body, true);

$update = "UPDATE `clients` SET `client`=".json_encode($data['newCanal']).",`quantity`=".json_encode($data["newQty"])." WHERE clients.client = ".json_encode($data['oldCanal'])."";

$update_query = mysqli_query($conn,$update);
echo $update_query;

$conn->close();