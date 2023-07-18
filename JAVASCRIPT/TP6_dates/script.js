function tirage(){
    let input;
    let person = [];

    do{
        input = prompt('Entrez un nom');
        person.push(input);
    }while(input != 0);

    let randomPerson = person[Math.floor(Math.random()*person.length)];
    person.pop();

    let date1 = new Date();
    let dateLocale = date1.toLocaleDateString('fr-FR');

    alert("Le tirage au sort du " + dateLocale + " a désigné comme grand gagnant " + randomPerson);
}

tirage()

