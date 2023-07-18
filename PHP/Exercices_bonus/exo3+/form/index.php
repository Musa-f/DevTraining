<?php
    include 'func.php';
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        
        <form action="" method="post">
            <label for="nom">Nom</label><br>
            <input type="text" name="nom">
            <br>
            <label for="mail">Email</label><br>
            <input type="email" name="email">
            <br>
            <label for="tel">Téléphone</label><br>
            <input type="number" name="tel">
            <br>
            <label for="adresse">Adresse</label><br>
            <input type="text" name="adresse">
            <br>
            <label for="cp">Code postal</label><br>
            <input type="number" name="cp">
            <br>
            <input type="submit" value="Entrer" name="submit">
        </form>

    </body>
</html>