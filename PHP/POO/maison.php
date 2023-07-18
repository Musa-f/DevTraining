<?php

class Maison{
    // attributs
    public $maison;
    public $longueur;
    public $largeur;
    public $nbEtages;

    // méthodes
    public function surface(){
        $superficie = ($this->longueur) * ($this->largeur) * ($this->nbEtages);
        return $superficie;
    }
}
