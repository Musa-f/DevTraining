<?php 
    //include database from model
    require './model/bdd.php';

    //include header from view
    include './view/view_articles_header.php';

    //include the select query from model
        include './model/model_articles_select.php';
        $dataName = f1_select($bdd);

    include './view/view_articles.php';

    //include footer from view
    include './view/view_articles_footer.php';

    './view/img['img'];

    //check if form is complete
    if(isset($_POST['submit'])){
        $name = $_POST['nom_article'];
        $content = $_POST['contenu_article'];

        if(!empty($name) AND !empty($content)){
            //include the insert query from model
            include './model/model_articles_insert.php';
            f1_insert($bdd, $name, $content);
        }
    };
?>