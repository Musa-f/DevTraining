<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 17</title>
    </head>

    <body>

        <form action="" method="POST">
            <label for="one">Nombre 1:</label>
            <input type="number" name="one">
            <br>
            <label for="two">Nombre 2:</label>
            <input type="number" name="two">
            <br>
            <input type="submit" name="submit" id="">
        </form>

        <?php
            if(isset($_POST['submit'])){
                $number1 = $_POST['one'];
                $number2 = $_POST['two'];
                $calcul = $number1 + $number2;
                echo "La somme est égale à:".$calcul;
            }
        ?>

    </body>
</html>