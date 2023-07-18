<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 6</title>
    </head>

    <body>

        <?php
            $prix = 10;
            $quantite = 5;
            $tva = 1.2;
            $totalTTC = $prix*$quantite*$tva;
            echo $totalTTC;
        ?>
        
    </body>
</html>