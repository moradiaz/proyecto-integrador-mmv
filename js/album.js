let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idAlbum');


let seldc = document.querySelector('.sectionDA');
let proxy = 'https://api.allorigins.win/raw?url='
let url =  `https://api.deezer.com/album/${nombreQS}`

console.log(nombreQS);

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data)

        let img = document.querySelector('.imagenTaylor');
        let title = document.querySelector('.tituloTaylor');
        let nombrealbum = document.querySelector('.nombrealbumtaylor');
        let ngenero = document.querySelector('.generotaylor');
        let ngenero2 = document.querySelector('.añotaylor');
        let ngenero3 = document.querySelector('.discotaylor');
    
        




    })