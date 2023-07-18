// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
array0 = [4,8,6,3];

function displayArray0(a){
    let last = a[a.length-1];
    console.log(last);
}
displayArray0(array0);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
array1 = [4,8,6,8];

function displayArray1(a){
    let last = a[a.length-1];
    return last;
}
console.log(displayArray1(array1));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minArray0(a){
    let min = Math.min(...a);
    return min;
}

array = [245528, 559723, 526534, 343074, 263623, 503337, 375487, 164162, 546881, 590891, 271727, 230142, 563851, 269582, 646850, 429364, 166273, 552847, 606558, 603943];

function minArray(a){
    currentMin = a[0];
    for(let i=0; i<a.length; i++){
        if(currentMin < a[i]){
            currentMin = currentMin;
        } else if(currentMin > a[i]){
            currentMin = a[i];
        }
    }
    return currentMin;
}
console.log(minArray(array));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maxArray(a){
    currentMax = a[0];
    for(let i=0; i<a.length; i++){
        if(currentMax > a[i]){
            currentMax = currentMax;
        } else if(currentMax < a[i]){
            currentMax = a[i];
        }
    }
    return currentMax;
}
console.log(maxArray(array));


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
arrayX2 = [4,6,8,2,10,3,5,51];

function maxArray2(a){
    max1 = a[0];
    max2 = a[0];
    for(let i=0; i<a.length; i++){
        if(max1<a[i]){ 
            max2 = max1;
            max1 = a[i];
        } else if(max2<a[i] && max1>a[i]){
            max2 = a[i];
        }
    }
    return max2;
}
console.log(maxArray2(arrayX2))


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
tableau = [7,5,7,2,7,7];

function arrayCount(tab, n){
    compteur = 0;
    for(let i=0; i<tab.length; i++){
        if(n == tab[i]){
            compteur+=1;
        }
    }
    return compteur;
}
console.log(arrayCount(tableau, 5));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function arrayExist(tab, n){
    let nExist = false;
    for(let i=0; i<tab.length; i++){
        if(n == tab[i]){
            nExist = true;
        }
    }
    return nExist;
}
console.log(arrayExist(tableau, 9));

function arrayExistV2(tab, n){
    if(arrayCount(tab, n) !== 0){
        return true;
    } else{
        return false;
    }
}
console.log(arrayExistV2(tableau, 5));

function arrayExistV3(tab,n) {
    return arrayCount(tab,n) > 0;
}
console.log(arrayExistV3(tableau, 9))

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
arrayAdd = []
for(let i=0; i<7777; i++){
    arrayAdd.push(i);
}
console.log(arrayAdd);

// Créer un tableau qui contient [10,20,30,...,77770].
arrayAddTen = [];
for(let i=0; i<77770; i+=10){
    arrayAddTen.push(i);
}
console.log(arrayAddTen);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
arrayAddTen2 = [];
for(let i=0; i<7770; i++){
    arrayAddTen2.push(arrayAddTen[i]/2);
}
console.log(arrayAddTen2);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
arrayLastNumbers = [8,6,54,77,90, 88,36,6,45]

function popLastNumbers(nPop){
    while(nPop[nPop.length-1]<50){
        nPop.pop();
    }
    return nPop;
}
console.log(popLastNumbers(arrayLastNumbers));