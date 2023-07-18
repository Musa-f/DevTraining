<?php

include "maison.php";
include "vehicule_private.php";

// objets
$maison = new Maison;
$maison->longueur = 3;
$maison->largeur = 5;
$maison->nbEtages = 2;
echo $maison->surface()."<br>";

// ---------------------------

$voiture = new Vehicule;
$voiture->setNomVehicule("clio");
$voiture->setNbRoues(4);
$voiture->setVitesse(90);

$nom = $voiture->getNomVehicule();
$roues = $voiture->getNbRoues();
$vitesse = $voiture->getVitesse();

echo "$nom a $roues roues et une vitesse de $vitesse";