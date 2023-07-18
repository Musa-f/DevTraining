<?php
    $bdd = new PDO('mysql:host=localhost;dbname=articles', "root", "", array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo 20</title>
    <style>
        body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        table{
            width: 250px;
            border: 1px solid black;
            border-collapse: collapse;
            text-align: center;
        }

        th{
            padding: 4px;
            border-bottom: double 3px black;
        }

        td{
            padding: 4px;
            border-bottom: 1px solid black;
        }

        .inp{
            text-align: center;
        }

        #submit{
            margin: 5px;
            padding: 5px;
        }

        .a{
            margin-top: 20px;
            width:90%;
        }

        @media screen and (min-width:900px) {
            table{
                width: 70%;
                height: 40%;
            }
        }
    </style>
</head>

<body>
    <br><br><br>

    <h2>Formulaire</h2>
    <form action="" method="post">
        <label for="nom_article">Nom de l'article: </label>
        <br>
        <input type="text" name="nom_article">
        <br>
        <label for="contenu_article">Contenu de l'article: </label>
        <br>
        <input type="text" name="contenu_article">
        <br>
        <div class="inp"><input type="submit" name="submit" value="Entrer" id="submit"></div>
    </form>

    <hr class="a">
    
    <h2>Données</h2>
    <table>
        <tr>
            <th>Nom</th>
            <th>Contenu</th>
        </tr>
        
        <?php
            $dataName = $bdd->query("SELECT * FROM article");
            foreach($dataName as $d):
                ?>
                <tr>
                    <td><?=$d['nom_article'];?></td>
                    <td><?=$d['contenu_article'];?></td>
                </tr>
                <?php
            endforeach;
            ?>
        
    </table>
</body>
</html>

<?php

    if(isset($_POST['submit'])){
        $name = $_POST['nom_article'];
        $content = $_POST['contenu_article'];

        if(!empty($name) AND !empty($content)){
            $method2 = $bdd->prepare("INSERT INTO article(nom_article, contenu_article) VALUES (:name_article, :content_article)");
            $method2->execute(array(
                'name_article' => $name,
                'content_article' => $content
            ));
        }

        /* Méthode 1
        $method1 = $bdd->query("INSERT INTO article(nom_article, contenu_article) VALUES ('$name', '$content')");
        $method1->execute();*/

    };

?>