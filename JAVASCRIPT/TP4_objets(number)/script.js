function functionNbRandom(max, min){
    let numberRandom = Math.random()*(max - min) + min;
    return number = Math.round((numberRandom)*10)/10;
}
let nbRandom = functionNbRandom(100, -100);


let button = document.getElementById('button');
let alert = document.getElementById('alert');

button.addEventListener('click', function(){
    let input = document.querySelector("input").value;

    if(input == nbRandom){
        alert.innerHTML = "Bravo ! Vous avez trouvé !"
    } else if(input == 0){
        alert.innerHTML = "Veuillez entrer un nombre";
    }else if(input<nbRandom){
        alert.innerHTML = "Le nombre mystère est plus grand que " + input;
    } else if (input>nbRandom){
        alert.innerHTML = "Le nombre mystère est plus petit que " + input;
    } 
})


/*let nbUtilisateur;

do {
    nbUtilisateur = parseFloat(prompt('Entrez un nombre entre -100 et 100:'));
    if (nbUtilisateur === nbRandom){
        alert('Vous avez trouvé')
    } else if(nbRandom<nbUtilisateur){
        alert('Le nombre mystère est plus petit que ' + nbUtilisateur);
    } else if(nbRandom>nbUtilisateur){
        alert('Le nombre mystère est plus grand que ' + nbUtilisateur);
    }
} while(nbUtilisateur != nbRandom)*/