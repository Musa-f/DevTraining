<?php

    $decimalFile = "./decimal.txt";
    $open = fopen($decimalFile, "r");
    $read = fread($open, filesize($decimalFile));
    $binaire = decbin($read);

    echo "Nombres décimaux: ".$read;
    echo "<br>";
    echo "Nombres binaires: ".$binaire;

    $binaireFile = "./binaire.txt";
    $binaireOpen = fopen($binaireFile, "w");
    fwrite($binaireOpen, $binaire);

?>