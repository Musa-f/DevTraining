<?php
    function f1_select($bdd){
        $dataName = $bdd->query("SELECT * FROM article");
        return $dataName;
    };
?>
