let qs = location.search;
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
    .then (function(data){
        console.log(data);

        let track = data.albums.data
        console.log(track);
        
        for (let i = 0; i < 1; i++) {
             section.innerHTML +=
                                `<article class="cajaTaylor sectionDA">
                                <img class="imagenTaylor" src="${track[i].cover_big}"alt=""> </a>
                             </article>`

                            `<article class="textoTaylor">
                                <h1 class="tituloTaylor">${track[i].artist.name}</h1>

                                <h2 class="nombrealbumtaylor">${track[i].data.title}</h2>
                                    <h4 class="infoTaylor generotaylor">${track[i].data.genre_id}</h4>
                                    <h4 class="infoTaylor añotaylor">${track[i].data.release_date}</h4>
                            </article>`
        
        }
    })
    .catch(function(error){
        console.log(error);
    })
    
    
    