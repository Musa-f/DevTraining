<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 5</title>
    </head>

    <body>
        
        <?php
            $a = 15;
            $b = 23;
            echo $a."-".$b."<br>";

            $c = $a;
            $a = $b;
            $b = $c;

            echo $a."-".$b;
        ?>

    </body>
</html>