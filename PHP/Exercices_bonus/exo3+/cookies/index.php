<?php

    $now = date_create()->format('Y-m-d H:i:s');

    $compteur = 0;
    setcookie('compteur', serialize($compteur), time()+3600);
    
    if(empty($_COOKIE['compteur'])){
        echo "C'est votre première visite (".$now.") <br>";
        unserialize($compteur);
        $compteur++;

    }else{
        unserialize($compteur);
        $compteur++;
        echo "nok";

    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>