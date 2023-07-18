<?php

    //EXERCICE 1
    echo "<h2>Exercice 1</h2>";
    echo "<p>Rédigez un script qui permet de tester si une chaîne ne contient que des lettres</p>";

    $word = "jdjJJJjd";
    $letters = '/^[a-zA-Z]+$/';
    /*
    ^: début de la chaine
    $: fin de la chaine 
    #: doit être dans la chaine au moins une fois
    * ou + : permet d'insérer plusieurs valeurs du champ
    |: ...ou...
    . : tout
    {min, max}; nb de fois
    ?: facultatif
    */
    
    if(preg_match($letters, $word)){
        echo "ok";
    }else{
        echo "no";
    }

    

    echo "<hr>";

    //EXERCICE 2
    echo "<h2>Exercice 2</h2>";
    echo "<p>Ecrire un script qui teste si une chaîne de caractères contient le caractère '@' (le cas d'une adresse e-mail).</p>";

    echo "<hr>";

    //EXERCICE 3
    echo "<h2>Exercice 3</h2>";
    echo "<p>Utiliser les expressions régulières pour vérifier si une chaîne de caractères correspond à :
        a. Un numéro de téléphone sous la  forme : 00 00 00 00 00 ou 00-00-00-00-00
        b. Un matricule qui commence par 3 lettres et se termine par 2 chiffres (exemple abc12).</p>";

?>