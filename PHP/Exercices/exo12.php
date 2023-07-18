<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 12</title>
    </head>

    <body>

        <?php
            function moyenne($a,$b,$c){
                $somme = $a+$b+$c;
                $moy = $somme/3;
                return $moy;
            }

            $avg = round(moyenne(4,8,10));
            echo $avg;
        ?>

    </body>
</html>
