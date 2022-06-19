/*let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idAlbum');


let section = document.querySelector('.cajaTaylor'); 
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  `https://api.deezer.com/album/${nombreQS}`

console.log(nombreQS);

fetch (proxy + url)
    .then (function(response){
        return response.json()
    })
    .then (data => {
        console.log(data)
    })
    
        let img = document.querySelector('.imagenTaylor');
        let title = document.querySelector('.tituloTaylor');
        let nombrealbum = document.querySelector('.nombrealbumtaylor');
        let ngenero = document.querySelector('.generotaylor');
        let ngenero2 = document.querySelector('.añotaylor');
        let ngenero3 = document.querySelector('.discotaylor');
        
        img.src = data.cover_medium;
        title.innerText = data.artist.name;
        nombrealbum.innerText = data.title; 
        ngenero2.innerText = data.release_date;
        ngenero.innerText = data.genre;*/
    

    /*fetch (proxy + url)
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);

        let albums = data.albums.data
        console.log(albums);
        
        for (let i = 0; i < 1; i++) {
             section.innerHTML +=
                                `<article class="cajaTaylor sectionDA">
                                    <img class="imagenTaylor" src="${albums[i].cover_big}"alt=""> </a>
                                </article>`

                                `<article class="textoTaylor">
                                    <h1 class="tituloTaylor">${albums[i].artist.name}</h1>
                                    <h2 class="nombrealbumtaylor">${albums[i].data.title}</h2>
                                    <h4 class="infoTaylor generotaylor">${albums[i].data.genre_id}</h4>
                                    <h4 class="infoTaylor añotaylor">${albums[i].data.release_date}</h4>
                                </article>`

        }
    })
    .catch(function(error){
        console.log(error);
    }) 
    */
    let queryString = location.search;
    let queryStringObjLiteral = new URLSearchParams(queryString);
    let id = queryStringObjLiteral.get("idAlbum");
    
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id} `;
    let urlTracks = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`;
    
    let seccionDA = document.querySelector(".cajaTaylor");
    let ulCancionesArtista = document.querySelector(".cancionesTaylor");
    let contenidoDeLista = " ";
    console.log(id);
    
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      
      .then(function (data) {
        console.log(data);
    
        for (let i = 0; i < 1; i++) {
          seccionDA.innerHTML += 
          `<article class="cajaTaylor sectionDA">
            <img class="imagenTaylor" src="${data.cover_medium}" alt=""> </a>
         </article>
 
         <article class="textoTaylor">
             <h1 class="tituloTaylor">${data.artist.name}</h1>
 
             <h2 class="nombrealbumtaylor">${data.title}</h2>
             
             <h4 class="infoTaylor generotaylor">${data.genres.data[i].name}</h4>
                 <h4 class="infoTaylor añotaylor">${data.release_date}</h4>
          </article>`;
        }
      })
    
      .catch(function (errores) {
        console.log(errores);
      });
    
      fetch(urlTracks)
      
      .then(function (response) {
       //console.log(urlTracks);
        return response.json();
       
      })
      .then(function (data) {
        console.log(data);
    
        let canciones = data.data
    
        for (let i = 0; i < canciones.length - 1; i++) {
          //pongo el -1 para que me tome todas las canciones
    
          contenidoDeLista += `<ol class="olcanciones"> ${canciones[i].title}</ol>`;
        }
      
        seccionDA.innerHTML += contenidoDeLista;
      })
    
      .catch(function (errores) {
        console.log(errores);
      });