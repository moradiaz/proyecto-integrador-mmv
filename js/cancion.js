
let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idCanciones');
console.log(nombreQS);

let seldc = document.querySelector('.sectionDC');
let proxy = 'https://api.allorigins.win/raw?url='
let url =  `https://api.deezer.com/track/${nombreQS}`



fetch (proxy + url)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data)
    


let img = document.querySelector('. detalleC');
let title = document.querySelector('.titulodoja'); 
let cancion = document.querySelector('.nombrecanciondoja');
let album = document.querySelector('.nombrealbum');

img.src = data.album.cover_big 
title.innerHTML = data.artist.name
cancion.innerHTML = data.title 
album.innerHTML = data.album.title 



})

