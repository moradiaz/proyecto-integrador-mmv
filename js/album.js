let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idAlbum');


let section = document.querySelector('.cajaTaylor'); 
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  `https://api.deezer.com/album/${nombreQS}`
let url2 = `https://api.deezer.com/album/${nombreQS}/tracks`
console.log(nombreQS);

fetch (proxy + url) 
    .then (function(response){
        return response.json()
    })
    .then (data => {
        console.log(data)
        
        let img = document.querySelector('.imagenTaylor');
        let title = document.querySelector('.tituloTaylor');
        let nombrealbum = document.querySelector('.nombrealbumtaylor');
        let ngenero = document.querySelector('.generotaylor');
        let ngenero2 = document.querySelector('.aniotaylor');
        let ngenero3 = document.querySelector('.discotaylor');
        
        img.src = data.cover_medium;
        title.innerText = data.artist.name;
        nombrealbum.innerText = data.title; 
        ngenero2.innerText = data.release_date;
        ngenero.innerText = data.genres.data.name;
    })
    
    let section2= document.querySelector('.cancionesTaylor');
    fetch (proxy + url2) 
    .then (function(response){
        return response.json()
    })
    .then (data => {
        console.log(data)
        
        /* let lista = document.querySelector('.olcanciones');
        olcanciones.innerText = `Canciones del disco : ${data.title}`;*/
        let canciones = data.data; 
       
        for (let i = 0; i < canciones.length -1; i++) {
            section2.innerHTML +=
            `<article class="olcanciones">
            <ol class="olcanciones">${canciones[i].title}</ol>
            </article>`
           
      
        }

        
    })
    .catch(function(error){
        console.log(error);
    })
    
    
        
        
    

    