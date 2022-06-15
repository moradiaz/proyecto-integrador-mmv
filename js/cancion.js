
let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idCanciones');

let seldc = document.querySelector('.sectionDC');
let proxy = 'https://api.allorigins.win/raw?url='
let url =  `https://api.deezer.com/track/3135556${nombreQS}`

console.log(nombreQS);

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data);

    let track = data.tracks.data
    console.log(track);

    
})

