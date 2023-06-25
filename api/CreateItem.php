<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$servername = "localhost";
$username = "root";
$password = "";
$db = 'chart';
//i need add that to .env

$canalPattern = "/[a-zA-Z0-9]/";

$conn = new mysqli($servername, $username, $password,$db);

 $request_body = file_get_contents('php://input');
 $data = json_decode($request_body, true);

$result = $conn->query("SELECT client FROM clients WHERE client = '".$data['canal']."'");
if(mysqli_num_rows($result) == 0) {

    if(preg_match($canalPattern, $data['canal']) && $data['canal'] !== "" && is_numeric($data['quantity'])) {
        $insert = "INSERT INTO `clients`(`client`, `quantity`) VALUES ('".$data['canal']."','".$data['quantity']."')";
        $insert_query = mysqli_query($conn,$insert);
        echo $insert_query;
    }else{
        echo "Bad values";
    }

} else {
    echo"Incorrect values";
}

$conn->close();