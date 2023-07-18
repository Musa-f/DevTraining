function testString(){
    let a = prompt("Entrez du texte: ")
    let b = prompt("Entrez du texte: ")
    return (a.includes(b) || b.includes(a)) ;
}

console.log(testString())