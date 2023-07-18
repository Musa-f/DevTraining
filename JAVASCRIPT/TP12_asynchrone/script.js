async function fileUpload(fileSize){
    let promesse = new Promise((resolve, reject) => {
        if(fileSize<10){
           setTimeout(resolve("ok"), 3000)
        }else{
            reject(new Error('Erreur de chargement'));
        }
    })
    return promesse;
}

async function result(){
    await fileUpload(3).then(response => {
        console.log("Succès: " + response);
    }).catch(e => {
        console.log("!Erreur: " + e)
    });
}
result();
