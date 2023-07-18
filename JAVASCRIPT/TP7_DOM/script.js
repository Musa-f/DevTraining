function windowOpen(){
    if(confirm("'Voulez-vous ouvrir une nouvelle fenêtre ?'")){
        
        let size = "width=700, height=700"
        window.open('https://www.adrar-formation.com/','',size)
    }
}

//windowOpen()


function myPosition(pas){
    let position = pas.coords; 

    let latitude = position.latitude;
    let longitude = position.longitude;

    let latitudeEiffel = 48.858370;
    let longitudeEiffel = 2.294481;
    
    console.log("Différence de latitude: " + (latitude - latitudeEiffel) + "\nDifférence de longitude: " + (longitude - longitudeEiffel));
}

//navigator.geolocation.getCurrentPosition(myPosition);


function objectLocation(){
    let informationsArray = [];

    informationsArray.push(window.location.hostname);
    informationsArray.push(window.location.protocol);
    informationsArray.push(window.location.href);
    informationsArray.push(window.location.port);
    
    if(confirm(informationsArray.join("\n"))){
        let size = "width=700, height=700"
        window.open('https://www.adrar-formation.com/','',size)
    }
}


//objectLocation()
