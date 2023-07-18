<?php

include("connect.php");
include("manager.php");
include("personnage.php");
session_start();

$conn = conn();
$personnageManager = new PersonnageManager($conn);
/*
$perso1 = new Personnage(1, "Superman", 0);
$perso2 = new Personnage(5, "Batman", 0);


echo "<br> ------CREER------ <br>";
//$personnageManager->creer($perso1);
//$personnageManager->creer($perso2);
echo "<br>";

echo "<br> ------AFFICHER------ <br>";
//$jean = $personnageManager->lecture("Jean");
//print_r($personnageManager->lecture($perso1));
echo "<br>";

echo "<br> ------MODIFIER------ <br>";
$perso1->setDegats(10);
echo $perso1->getDegats();
$personnageManager->modifier($perso1);
echo "<br>";

echo "<br> ------SUPPRIMER------ <br>";
//$personnageManager->supprimer($perso2);
echo "<br>";

echo "<br> ------EXISTENCE DU PERSO------ <br>";
print_r($personnageManager->existencePerso(2));
echo "<br>";
*/

if(isset($_POST["creer"]) AND !empty($_POST["nom"])){
    $nom = $_POST["nom"];

    $bool = $personnageManager->existencePerso($nom);
    if($bool == 1){
        echo "Le personnage existe déjà.";
    }else{
        $personnage = new Personnage(0, $nom, 0);
        $personnageManager->creer($personnage);
        echo "Le personnage a bien était créé.";
    }
}

if(isset($_POST["utiliser"]) AND !empty($_POST["nom"])){
    $nom = $_POST["nom"];
    $bool = $personnageManager->existencePerso($nom);

    if($bool == 1){
        /*$getPersonnage = $personnageManager->lecture($nom);
        $personnageNom = strval($getPersonnage->getNom());
        $personnageDegats = intval($getPersonnage->getDegats());
        
        //$_SESSION['test'] = $getPersonnage;
        $_SESSION['user'] = $personnageNom;
        $_SESSION['degats'] = $personnageDegats;*/
        $_SESSION['user'] = $personnageManager->lecture($nom);

    }else{
        echo "Ce nom n'existe pas.";
    }
}


$formHtml = <<<HTML

    <h2>Entrez le nom de votre personnage</h2>

    <form action="" method="post">
        <label for="">Nom</label>
        <input type="text" name="nom">
        <br><br>
        <input type="submit" name="creer" value="Créer un personnage">
        <input type="submit" name="utiliser" value="Utiliser un personnage">
    </form>

HTML;

if(!isset($_SESSION['user'])){
    echo $formHtml;
}else{
    $nom = $_SESSION['user']->getNom();
    if(isset($_GET['frapper']) AND $_GET['frapper'] !== $nom){
        $perso2 = $_GET['frapper'];
        $perso1 = $_SESSION['user'];
        $personnage2 = $personnageManager->lecture($perso2);
        $return = $perso1->frapper($personnage2);
        $personnageManager->modifier($personnage2);
        echo "Vous avez frappé le personnage $perso2";
        if($return == "persoTue"){
            $personnageManager->supprimer($personnage2);
            echo "Le personnage a été tué";
        }
    }else if(isset($_GET['frapper']) AND $_GET['frapper'] == $nom){
        echo "Vous ne pouvez pas vous frapper";
    }
    $accountHTML =  " 
                    <h2>Bienvenue ". $_SESSION['user']->getNom()."</h2>
                    <form>
                        <fieldset>
                            <legend> Mes informations </legend>
                            <label>Nom: ".$_SESSION['user']->getNom()."</label>
                            <br>
                            <label>Dégâts: ".$_SESSION['user']->getDegats()."</label>
                        </fieldset>
                        <fieldset>
                            <legend> Qui frapper ? </legend>";
    $endAccountHTML = "</fieldset> </form>";

    $logout = "<a href='logout.php'>Se déconnecter</a>";

    $perso = $personnageManager->listePerso($_SESSION['user']->getNom());

    echo $accountHTML;
    foreach($perso as $key => $value):
        echo "<a href='?frapper=".$perso[$key]->getNom()."'>".$perso[$key]->getNom()."</a>";
        echo ' (Dégâts: '.$perso[$key]->getDegats().')';
        echo '<br>';
    endforeach;
    echo $endAccountHTML;
    echo $logout;
    
}

