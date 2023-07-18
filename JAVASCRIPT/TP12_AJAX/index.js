let button = document.querySelector('button');
let div = document.querySelector('div#results');

let xhr = new XMLHttpRequest();
xhr.open("GET", "http://serveurrecette/js/presidents.json")
xhr.responseType = "";
xhr.send();


button.addEventListener('click', function(){
    let xhrText = xhr.responseText;
    let tab = JSON.parse(xhrText)

    let htmlString = '';
    htmlString += '<table><tr><th>No</th> <th>Name</th> <th>Birth</th> <th>Death</th> <th>Took Office</th> <th>Left Office</th> <th>Party</th> </tr>';

    for(let i=0; i<tab.length; i++){
        htmlString += '<tr>';
        htmlString += '<td>' + tab[i].number + '</td>';
        htmlString += '<td>' + tab[i].president + '</td>';
        htmlString += '<td>' + tab[i].birth_year + '</td>';
        htmlString += '<td>' + tab[i].death_year + '</td>';
        htmlString += '<td>' + tab[i].took_office + '</td>';
        htmlString += '<td>' + tab[i].left_office + '</td>';
        htmlString += '<td>' + tab[i].party + '</td>';
        htmlString += '</tr>';
    }
    htmlString += '</table>';

    div.insertAdjacentHTML('beforebegin', htmlString);
})
