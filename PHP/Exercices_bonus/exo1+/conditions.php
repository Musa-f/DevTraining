<?php

    //exercice 1
    echo "<h2>Exercice 1</h2>";
    echo "<p>Écrivez une expression conditionnelle utilisant une variable note et affiche un grade à un intervalle de note : grade A pour une note entre [18-20]  B [14-18[ , C [10-14[ , et D [10-0[.</p>";

    function exo1(){
        $note = 2;
        if($note<=20 && $note>=18){
            echo "Grade A";
        }elseif($note<18 && $note>=14){
            echo "Grade B";
        }elseif($note<14 && $note>=10){
            echo "Grade C";
        }elseif($note<10 && $note>=0){
            echo "Grade D";
        }else{
            echo "Erreur";
        }
    }
    $form1 = <<<HTML
    <form action="" method="POST">
        <input type="submit" name="submit1" value="Voir l'exercice 1">
    </form>
HTML;
    echo $form1;
    if(isset($_POST['submit1'])){
        echo exo1();
    }
    

    echo "<hr>";

    //Exercice 2
    echo "<h2>Exercice 2</h2>";
    echo "<p>Rédigez une expression conditionnelle qui teste si un nombre est à la fois multiple de 3 et de 7.</p>";

    function exo2(){
        $number = 17;
        $trois = $number%3;
        $sept = $number%7;

        if($trois == 0 && $sept == 0){
            echo "Le nombre ".$number." est bien divisible par 3 et 7.";
        }else{
            echo "Le nombre ".$number." n'est pas divisible par 3 et 7.";
        }
    }
    $form2 = <<<HTML
    <form action="" method="POST">
        <input type="submit" name="submit2" value="Voir l'exercice 2">
    </form>
HTML;
    echo $form2;
    if(isset($_POST['submit2'])){
        echo exo2();
    }

    echo "<hr>";

    //Exercice 3
    echo "<h2>Exercice 3</h2>";
    echo "<p>Utilisez les variables nombre1 nombre2 et operation pour réaliser un script effectuant une opération parmi les quatre opérations arithmétiques  élémentaires suivant la valeur de la variable opération ( utiliser l'instruction switch).</p>";

    function exo3(){
        $nombre1 = 5;
        $nombre2 = 5;
        $operation = "+";

        switch($operation){
            case "+":
                echo $nombre1."+".$nombre2."=".$nombre1+$nombre2;
                break;
            case "-":
                echo $nombre1."-".$nombre2."=".$nombre1-$nombre2;
                break;
            case "*":
                echo $nombre1."*".$nombre2."=".$nombre1*$nombre2;
                break;
            case "/":
                if($nombre2 == 0){
                    echo "Le dénominateur ne peut pas être égal à 0.";
                }else{
                    echo $nombre1."/".$nombre2."=".$nombre1/$nombre2;
                }
                break;
                default:
                    echo "Veuillez choisir un opérateur valide.";
        }
    }
    $form3 = <<<HTML
    <form action="" method="POST">
        <input type="submit" name="submit3" value="Voir l'exercice 3">
    </form>
HTML;
    echo $form3;
    if(isset($_POST['submit3'])){
        echo exo3();
    }


?>