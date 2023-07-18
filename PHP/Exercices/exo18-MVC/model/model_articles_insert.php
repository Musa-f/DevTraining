<?php
    function f1_insert($bdd, $name, $content){
        $method2 = $bdd->prepare("INSERT INTO article(nom_article, contenu_article) VALUES (:name_article, :content_article)");
        $method2->execute(array(
            'name_article' => $name,
            'content_article' => $content
        ));
        return $method2;
    };
?>
