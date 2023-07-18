// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1()

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2())

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    console.log(n+n)
}

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99)

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n){
    return n+n;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99))


// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(a,b){
    console.log(a + b);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(a,b){
    return a+b;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a += f6(42,77);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(a,b){
    if(a>b){
        return a;
    } else return b;
}
console.log(f7(7,10));


// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois. (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(a,b,c){
    if(a>c && a>b){
        return a;
    } if (b>c && b>a){
        return b;
    } else{
        return c;
    }
}
console.log(f8(7,17,140));

function f8bis(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }
    } if(b>a){
        if(b>c){
            return b;
        }
    } if (c>a){
        if(c>b){
            return c;
        }
    }
}
console.log(f8bis(7,5,9));

function f8ter(n1,n2,n3){
    let maxN1N2 = f7(n1,n2);
    return f7(maxN1N2, n3);
}
//OU
function f8terBis(n1,n2,n3){
    return f7(f7(n1,n2),n3);
}

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(a,b){
    for(let i=0; i<a; i++){
        console.log(b);
    }
    return b;
}
console.log(f9(5,"mot"));