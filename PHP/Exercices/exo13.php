<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 13</title>
    </head>

    <body>

        <?php
            function valeur($a){
                if($a>0){
                    return "Le nombre est positif";
                }else{
                    return "Le nombre est négatif";
                }
            }

            $val = valeur(-8);
            echo $val;
        ?>

    </body>
</html>