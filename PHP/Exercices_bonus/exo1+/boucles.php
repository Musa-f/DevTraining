<?php
    //EXERCICE 1
    echo "<h2>Exercice 1</h2>";
    echo "<p>Déclarer un nombre initial avec une valeur supérieure à 100 et inférieure à 1000  en utilisant la boucle while effectuer des tirages aléatoires des nombres jusqu'à obtenir la même valeur du initial et afficher le nombre d'itérations réalisées. \n Donnez une variante avec la boucle do ....while</p>";

    function exo1(){
        $inital = 10;
        $random = rand(0,20);
        $nb=0;
        
        while($inital !== $random){
            $random = rand(0,20);
            $nb++;
            echo $nb.".".$random."<br>";
        }

        echo "Le nombre d'itération total est de ".$nb;
    }

    echo exo1();

    echo "<hr>";

    //EXERCICE 2
    echo "<h2>Exercice 2</h2>";
    echo "<p>Ecrivez un script qui affiche les multiples du nombre 3 inférieurs à un nombre donné.</p>";

    function exo2($nb){
        $n = $nb;
        while($n !== 0){
            if(($n%3) == 0){
                echo $n;
                echo "<br>";
                $n--;
            }else{
                $n--;
            }
        }
        
        /*Méthode 2
        for($i=0;$i<$nb;$i+=3)
            echo $i;*/
    }
    echo exo2(32);

    //exo2(20);

    echo "<hr>";

    //EXERCICE 3
    echo "<h2>Exercice 3</h2>";
    echo "<p>Utiliser la boucle for pour tester si un nombre donné est premier.</p>";

    function exo3($nbpremier){
        $result;
        for($i=2; $i<$nbpremier; $i++){
            if(($nbpremier%$i) == 0){
                $result = " n'est pas un nombre premier";
            }
        }

        if(!empty($result)){
            echo $nbpremier.$result."<br>";
        }else{
            echo $nbpremier." est un nombre premier"."<br>";
        }
    }

    exo3(4);
    exo3(17);
    exo3(-2);
    exo3(52);

?>