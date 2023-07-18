<?php

    //1) Créer et initialiser un tableau $notes avec les valeurs suivantes : clé-valeur, said-13, badr-16, najat-15
    $eleves = array(
        'Said' => 13,
        'Badr' => 16,
        'Najat' => 15
    );
    print_r($eleves);
    echo "<hr>";

    //2) Ajouter au  tableau la note 10 de l’étudiant "karim"
    $eleves['Karim'] = 10;
    print_r($eleves);
    echo "<hr>";

    //3) supprimer la note de l’étudiant "badr".
    unset($eleves['Badr']);
    print_r($eleves);
    echo "<hr>";
    
    //4) Déterminer la note maximale et la note  minimale du groupe.
    $max = reset($eleves);
    foreach($eleves as $eleve => $e){
        if($e>$max){
            $max = $e;
        }
    } echo "La note maximale est de ".$max."<br>";

    $min = reset($eleves);
    foreach($eleves as $eleve => $e){
        if($e<$min){
            $min = $e;
        }
    } echo "La note minimale est de ".$min;
    echo "<hr>";

    //5) Afficher le tableau après l'avoir trier  par ordre alphabétique.
    ksort($eleves);
    foreach($eleves as $eleve => $e){
        echo $eleve;
        echo "<br>";
    }
    echo "<hr>";

    //6) Classer les étudiants  par ordre de mérite et afficher  le tableau.
    sort($eleves);
    print_r($eleves);
    echo "<hr>";

    //7) Déterminer la moyenne de la classe.
    $sum = 0;
    $d = [];

    foreach($eleves as $eleve => $k){
        $d[] = $k;
        $sum += $k;
    }

    $d = strlen($k)+1;
    $result = $sum/$d;
    echo "La moyenne de la classe est de ".round($result, 2);

?>