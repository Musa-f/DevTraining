<?php
    function conn(){
        $servername = 'localhost';
        $dbname = "tp-poo";
        $username = 'root';
        $password = '';

        $conn = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);

        return $conn;
    }
?>