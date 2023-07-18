<?php
    $bdd = new PDO("mysql:host=localhost;dbname=systemwemployees", "root", "", array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    </head>

    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto text-center">
                <li class="nav-item">
                    <a class="nav-link text-white" href="index.php">Tableau</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="form.php">Formulaire</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="delete.php">Supression</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="search.php">Recherche</a>
                </li>
            </ul>

        </div>
    </nav>