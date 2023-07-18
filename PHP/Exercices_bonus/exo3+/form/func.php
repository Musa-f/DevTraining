<?php
    if(isset($_POST['submit'])){
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $adresse = $_POST['adresse'];
        $cp = $_POST['cp'];

        if(!empty($nom) AND !empty($email) AND !empty($tel) AND !empty($adresse) AND !empty($cp)){
            echo "Vos informations sont correctes.";
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                echo "L'adresse mail est valide";
            }
        }else{
            echo "Veuillez compléter tous les champs.";
        }
    }

?>