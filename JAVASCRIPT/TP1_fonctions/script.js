function exo2(){
    let nbEnfant = parseInt(prompt("Quel est le nombre d'enfant ?"));

    for(let i=0; i<nbEnfant; i++){
        let ageEnfant = parseInt(prompt("Quel est l'âge de l'enfant ?"));
        if(ageEnfant>=6 && ageEnfant<=7){
            alert('Poussin');
        } else if(ageEnfant>=8 && ageEnfant<=9){
            alert('Pupille');
        } else if(ageEnfant>=10 && ageEnfant<=11){
            alert('Minime');
        } else if(ageEnfant>=12 && ageEnfant<=17){
            alert('Cadet');
        } else{
            alert('Erreur');
        }
    }
}


function exo3(){
    function getChild(){
        let nbEnfant = parseInt(prompt("Quel est le nombre d'enfant ?"));
        return nbEnfant;
    }
    function getCategorie(nbEnfant){
        for(let i=0; i<nbEnfant; i++){
            let ageEnfant = parseInt(prompt("Quel est l'âge de l'enfant ?"));
            if(ageEnfant>=6 && ageEnfant<=7){
                alert('Poussin');
            } else if(ageEnfant>=8 && ageEnfant<=9){
                alert('Pupille');
            } else if(ageEnfant>=10 && ageEnfant<=11){
                alert('Minime');
            } else if(ageEnfant>=12 && ageEnfant<=17){
                alert('Cadet');
            } else{
                alert('Erreur');
            }
        }
    }    
    let nbEnfant=getChild();
    getCategorie(nbEnfant);
}


function calcul(){
    function nombre(){
        return parseInt(prompt("Veuillez saisir un nombre"));
    }
    function somme(a,b){
        result = a + b;
        return result;
    }
    function multi(a,b){
        result = a*b;
        return result;
    }
    function moy(a,b){
        result = (a+b)/2
        return result;
    }
    function modulo(a,b){
        result = a%b;
        return result;
    }
    let nb1 = nombre();
    let nb2 = nombre();
    console.log("Vos nombres sont: " + nb1 + " et " + nb2)
    console.log(somme(nb1, nb2))
    console.log(multi(nb1, nb2))
    console.log(moy(nb1, nb2))
    console.log(modulo(nb1, nb2))
}
calcul()



//------------------------------------------------ 

/*switch(nbEnfant){
    case (6 || 7):
        alert("Poussin");
        break;
    case (8 || 9):
        alert("Pupille");
        break;
    case (10 || 11):
        alert("Minime");
        break;
    case (12 || 13 || 14 || 15 || 16 || 17):
        alert("Cadet");
        break;
    default:
        alert('Erreur');
}*/