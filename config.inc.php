<?php
//Database configuration

$host = "localhost";
$user = "root";
$password = "";
$database = "hope_on_wheel";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
?>