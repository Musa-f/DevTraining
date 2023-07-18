//---------------------------------------------Compteur cookie V1
/*
let body = document.querySelector('body');
let div = document.createElement('div');
div.style.width = "300px";
div.style.height = "100px";
div.style.background = "grey";
div.style.textAlign = "center";

body.append(div);

function cookies(){
    document.cookie = "name=doe";

    if(!document.cookie.includes("compteur")){
        document.cookie = "compteur=0";
    }

    let nbvisite;
    let cookie=document.cookie;
    let cookie2 = cookie.split(";");
    /// cookie3 dans la boucle
    let cookie4 = [];

    for(let i=0; i<cookie2.length; i++){
        let cookie3 = cookie2[i].split("=");
        cookie4.push(cookie3[0]); //name, compteur
        cookie4.push(cookie3[1]); //doe, 0
    }

    for(let i=0; i<cookie4.length; i++){
        if(cookie4[i].includes("compteur")){
            nbvisite = parseInt(cookie4[i+1])+1;
        }
    }

    console.log(document.cookie = "compteur=" + nbvisite);
    div.append("Compteur " + nbvisite);
}

cookies();*/

//---------------------------------------------V2
let body = document.querySelector('body');
let div = document.createElement('div');
body.append(div);

function createCookie(name, value, day){
    let exp;
    //Si les jours ont bien été définis
    if(day){
        let day = new Date(); //créer un objet date qui stocke la date actuelle
        day.setTime(day.getTime()+(day*24*60*60*1000)); //on définit la date d'expiration
        exp = '; expire=' + day.toUTCString(); //on met la date au format cookie
    }
    //Si les jours n'ont pas été définis
    else{exp = ''};
    return document.cookie = name + "=" + value + exp + ";path=/";
}

function readCookie(name){
    let nameEgal = name + "="; //on récupère le nom du cookie et le signe '='
    let tab = document.cookie.split(";"); //on récupère tous les cookis dans un tableau
    //parcourt le tableau créé
    for(let i=0; i<tab.length; i++){
        let c = tab[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1, c.length)
        }
        if(c.indexOf(nameEgal) == 0){
            return c.substring(nameEgal.length, c.length);
        }
    }
    //si name du cookie non trouvé, existe pas
    return null;
}

function deleteCookie(name){
    return createCookie(name, '', -1);
}

//COMPTEUR
let value = readCookie("compteur");

if(value != null){
    value = parseInt(value)+1;
    createCookie("compteur", value)
}else{
    value = 0;
    createCookie("compteur", 0)
}

div.innerHTML = "Compteur: " + value;


