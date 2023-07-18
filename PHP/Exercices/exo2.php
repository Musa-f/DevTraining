<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 2</title>
    </head>

    <body>

        <?php 
            $int = 5;
            echo $int." ~";
            echo gettype($int)."<br><br>";

            $prenom = "Fatima";
            echo $prenom." ~";
            echo gettype($prenom)."<br><br>";

            $bool = false;
            echo $bool." ~";
            echo gettype($bool)."<br><br>";

            $array = ["un", "deux"];
            foreach($array as $a){
                echo $a." ~";
                echo gettype($a)."<br>";
            }
            echo "~~".gettype($array);
        ?>
        
    </body>
</html>