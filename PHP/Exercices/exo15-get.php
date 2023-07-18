<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exo 18</title>
    </head>

    <body>

        <form action="" method="GET">
            <label for="prixht">Prix unitaire: </label>
            <input type="number" name="prixht">
            <br>
            <label for="quantite">Quantité: </label>
            <input type="number" name="quantite">
            <br>
            <label for="tva">Taux de TVA:</label>
            <input type="number" name="tva">
            <br>
            <input type="submit" name="submit">
        </form>

        <?php
        if(isset($_GET['submit'])){
            $prixHT = $_GET['prixht'];
            $quantite = $_GET['quantite'];
            $tauxTVA = $_GET['tva'];

            $totalHT = $prixHT * $quantite;
            $calculTVA = $totalHT * ($tauxTVA/100);
            $totalTTC = $totalHT + $calculTVA;

            $result = <<<HTML
            <br><br>
            <div>Prix HT: $prixHT</div>
            <div>Montant de la TVA: $calculTVA</div>
            <div>Prix TTC: $totalTTC</div>
HTML;
            echo $result;
        }
        ?>

    </body>
</html>