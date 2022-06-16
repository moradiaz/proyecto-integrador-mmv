
let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idCanciones');


let seldc = document.querySelector('.sectionDC');
let proxy = 'https://api.allorigins.win/raw?url='
let url =  `https://api.deezer.com/track/${nombreQS}`

console.log(nombreQS);

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data)
    


let img = document.querySelector('.detalleC');
let title = document.querySelector('.titulodoja'); 
let cancion = document.querySelector('.nombrecanciondoja');
let album = document.querySelector('.nombrealbum');

img.src = data.album.cover_big 
title.innerText = data.artist.name
cancion.innerText = data.title 
album.innerText = data.album.title 

console.log(data.album.cover_big, data.artist.name, data.title , data.album.title )

})

