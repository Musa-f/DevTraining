
//-----------------EXO 1
let title = document.querySelector('title');
let titre = document.querySelector('h1');
let paragraphe1 = document.querySelector('p');
let paragraphe2 = document.getElementById('id');
let paragraphe3 = document.querySelector('p.p');

title.innerText = "DEV";

titre.outerHTML = "<h1>Bienvenue sur mon super site !</h1>";
paragraphe1.outerHTML = "<h2>J'adore le développement</h2>";
paragraphe2.outerText = "Le HTML, le CSS...";
paragraphe3.innerText = "Et maintenant le JS !";


//-----------------EXO 2

let box = document.getElementById("box");
let titre1 = document.querySelector('h1.titreexo2');

titre1.innerText = "Je suis le titre H1";

let titre2 = document.createElement("h2");
let paragrapheExo2 = document.createElement('P')
let paragrapheExo3 = paragrapheExo2.cloneNode(true);
let listeUl = document.createElement('ul');
let li = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');



titre2.innerText = "titre H2";
paragrapheExo2.innerText = "Je suis le 2nd paragraphe";
paragrapheExo3.innerText = "Je suis le 3e paragraphe";
li.innerText = "ListeItem1"
li2.innerText = "ListeItem2"
li3.innerText = "ListeItem3"
li4.innerText = "ListeItem4"

li.setAttribute('class', 'list-style');
li2.setAttribute('class', 'list-style');
li3.setAttribute('class', 'list-style');
li4.setAttribute('class', 'list-style');

box.append(titre2);
box.append(paragrapheExo2);
box.append(paragrapheExo3);
box.append(listeUl);

listeUl.append(li);
listeUl.append(li2);
listeUl.append(li3);
listeUl.append(li4);


//-----------------EXO 3
let paraStyle = document.querySelector('p#parag1');
function changerStyle(){
    /*paraStyle.style.background = "black";
    paraStyle.style.color = "white";
    paraStyle.style.border = "solid 2px red";*/

    //paraStyle.classList.toggle("style");
    paraStyle.classList.add("style");
}