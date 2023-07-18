<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 19</title>
    </head>

    <body>

        <form action="" method="post" enctype="multipart/form-data">
            <h2>Importer un fichier</h2>
            <input type="file" name="file">
            <br><br>
            <input type="submit" value="Importer" name="submit">
        </form>
        
    </body>
</html>

<?php

    if(isset($_POST['submit'])){
        if(isset($_FILES['file'])){
            $tmpname = $_FILES['file']['tmp_name'];
            $name = $_FILES['file']['name'];
            $size = $_FILES['file']['size'];
            $error = $_FILES['file']['error'];
            $fichier = move_uploaded_file($tmpname, "./import/$name");
        }
        echo $name;
    }

?>