<?php
$fnam = $_POST['fname'];
$lnam = $_POST['lname'];
$age = $_POST['age'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$conn = mysqli_connect("localhost", "root", "root", "personal_info");
$sql = "INSERT INTO `info`(`first_name`, `last_name`, `dob`, `email`, `pass`) VALUES ('$fnam','$lnam','$age','$email','$pass')";

$res = mysqli_query($conn, $sql);

if ($res){
    //echo "Information stored successfully.";
    header('Location: http://localhost:8888/ty.html');
    exit();
 }

    else{
        echo "some error";
    }

$mysqli->close();

    ?>
