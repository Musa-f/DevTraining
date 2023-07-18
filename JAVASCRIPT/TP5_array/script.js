let tableau = ["lola", "Nor", "Jean", "Ariel"]

for(let valeur of tableau){
    console.log(valeur);
}

let pushTableau = tableau.push('Xavier')
console.log(pushTableau) //return taille tableau après ajout

let popTableau = tableau.pop()
console.log(popTableau); //return valeur supprimée

let unshiftTableau = tableau.unshift("Belly");
console.log(unshiftTableau); //return taille tableau

let shiftTableau = tableau.shift();
console.log(shiftTableau); //return élément supprimé

let spliceTableau = tableau.splice(0, 1, "NO")

let joinTableau = tableau.join(" x ");
console.log(joinTableau);

let sliceTableau = tableau.slice(0,4);
console.log(sliceTableau);

let ages = [24, 44, 11, 77, 13];
let global = tableau.concat(ages);
console.log(global);

//---------------------------------------

let semaine =  ['lun', 'mra', 'mer', 'jeu', 'ven', 'sam'];

semaine.pop();
console.log(semaine);
semaine.push('dim');
semaine.splice(1, 1, "mar");
console.log(semaine);

let taille = semaine.length;
document.write(taille);

console.log(semaine[2]);