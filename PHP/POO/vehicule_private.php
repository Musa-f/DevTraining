<?php

class Vehicule{
    private $nomVehicule;
    private $nbRoues;
    private $vitesse;

    public function getNomVehicule(){ 
		return $this->nomVehicule;
	}

	public function setNomVehicule($nomVehicule) {
		$this->nomVehicule = $nomVehicule;
	}

	public function getNbRoues() {
		return $this->nbRoues;
	}

	public function setNbRoues($nbRoues) {
		$this->nbRoues = $nbRoues;
	}

	public function getVitesse() {
		return $this->vitesse;
	}

	public function setVitesse($vitesse) {
		$this->vitesse = $vitesse;
	}
}

